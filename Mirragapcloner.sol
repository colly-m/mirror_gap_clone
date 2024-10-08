//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Decentramirragap is ERC721URIStorage {
    uint256 public tokenCount;
    uint256 public postCount;

    mapping(uint256 => Post) public posts;
    // address => NFT id
    mapping(address => uint256) public profiles;

    struct Post {
        uint256 id;
        string hash;
        uint256 tipAmount;
        address payable author;
    }
    event PostCreated(
        uint256 id,
        string hash,
        uint256 tipAmount,
        address payable author
    );

    event PostTipped(
        uint256 id,
        string hash,
        uint256 tipAmount,
        address payable author
    );

    constructor() ERC721("Decentramirragap", "DAPP") {}

    function mint(string memory _tokenURI) external returns (uint256) {
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);

        return (tokenCount);
    }

    function setProfile(uint256 _id) public {
        require(
            ownerOf(_id) == msg.sender,
            "Must own the nft you want to select as your profile"
        );
        profiles[msg.sender] = _id;
    }
    function uploadPost(string memory _postHash) external {
        // Checks that user owns an nft
        require(
            balanceOf(msg.sender) > 0,
            "Must own an nft to upload a post"
        );
        // Make sure the post hast exists
        require(bytes(_postHash).length > 0, "Must provide a post hash");
        // Increment post count
        postCount++;
        // Add post to the contract
        posts[postCount] = Post(postCount, _postHash, 0, payable(msg.sender));
        // Trigger an event
        emit PostCreated(postCount, _postHash, 0, payable(msg.sender));
    }

    function tipPostOwner(uint256 _id) external payable {
        // Make sures id is valid
        require(_id > 0 && _id <= postCount, "Invalid post id");
        // Fetchh the post
        Post memory _post = posts[_id];
        require(_post.author != msg.sender, "Cannot tip yourself");
        // Pay the author by sending them Ether
        _post.author.transfer(msg.value);
        // Increment the tip amount
        _post.tipAmount += msg.value;
        // Update the image
        emit PostTipped(_id, _post.hash, _post.tipAmount, _post.author);
    }

    function getAllPosts() external view returns (Post[] memory _posts) {
        _posts = new Post[](postCount);
        for (uint256 i = 0; i < _posts.length; i++) {
            _posts[i] = posts[i + 1];
        }
    }
    // Fetches all user nfts
    function getMyNfts() external view returns (uint256[] memory _ids) {

    }
}