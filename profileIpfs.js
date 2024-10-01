import { useState, useEffect, useCallback } from 'react';  
import { Row, Form, Button, Card, Col } from 'react-bootstrap';
import { ThirdwebStorage } from '@thirdweb-dev/storage';
import { useDropzone } from 'react-dropzone';
import { useStorageUpload, MediaRenderer } from "@thirdweb-dev/react"; // Updated imports

const storage = new ThirdwebStorage();

const Profile = ({ contract }) => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState('');
    const [nfts, setNfts] = useState([]);

    // Custom hook for handling file uploads and rendering uploaded media
    const useUploadToIPFS = () => {
        const [uris, setUris] = useState([]); // State for storing uploaded file URIs

        const { mutateAsync: uploadToIPFS } = useStorageUpload();

        const onDrop = useCallback(async (acceptedFiles) => {
            try {
                const _uris = await uploadToIPFS({ data: acceptedFiles });
                setUris(_uris);
                setAvatar(_uris[0]); // Set the first uploaded URI as the avatar
            } catch (error) {
                console.error("IPFS upload error:", error);
                window.alert("Failed to upload image to IPFS");
            }
        }, [uploadToIPFS]);

        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

        return (
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
                {uris.map((uri) => (
                    <MediaRenderer key={uri} src={uri} alt="Uploaded media" />
                ))}
            </div>
        );
    };

    // Using the custom hook for IPFS upload
    const UploadComponent = useUploadToIPFS();

    const loadMyNFTs = async () => {
        try {
            const results = await contract.getMyNfts();
            const nfts = await Promise.all(results.map(async i => {
                const uri = await contract.tokenURI(i);
                const response = await fetch(uri);
                const metadata = await response.json();
                return {
                    id: i,
                    username: metadata.username,
                    avatar: metadata.avatar
                };
            }));
            setNfts(nfts);
            getProfile(nfts);
        } catch (error) {
            console.error("Error loading NFTs:", error);
            window.alert("Failed to load NFTs");
        }
    };

    const getProfile = async (nfts) => {
        try {
            const address = await contract.signer.getAddress();
            const id = await contract.profiles(address);
            const profile = nfts.find((i) => i.id.toString() === id.toString());
            setProfile(profile);
            setLoading(false);
        } catch (error) {
            console.error("Error loading profile:", error);
            window.alert("Failed to load profile");
        }
    };

    const mintProfile = async () => {
        if (!avatar || !username) return;
        try {
            const metadata = { avatar, username };
            const result = await storage.upload(metadata); // Upload metadata to IPFS
            setLoading(true);
            await contract.mint(result).wait(); // Use IPFS URI returned by storage
            loadMyNFTs();
        } catch (error) {
            console.error("Minting profile error:", error);
            window.alert("IPFS URI upload error");
        }
    };

    const switchProfile = async (nft) => {
        setLoading(true);
        try {
            await contract.setProfile(nft.id).wait();
            getProfile(nfts);
        } catch (error) {
            console.error("Error switching profile:", error);
            window.alert("Failed to switch profile");
        }
    };

    useEffect(() => {
        if (!nfts.length) {
            loadMyNFTs();
        }
    }, [nfts, contract]);

    if (loading) {
        return (
            <div className='text-center'>
                <main style={{ padding: "1rem 0" }}>
                    <h2>Loading...</h2>
                </main>
            </div>
        );
    }

    return (
        <div className="mt-4 text-center">
            {profile ? (
                <div className="mb-3">
                    <h3 className="mb-3">{profile.username}</h3>
                    <img className="mb-3" style={{ width: '400px' }} src={profile.avatar} alt="Profile Avatar" />
                </div>
            ) : (
                <h4 className="mb-4">No NFT profile, please create one...</h4>
            )}
            <div className="row">
                <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
                    <div className="content mx-auto">
                        <Row className="g-4">
                            {/* Render Dropzone for avatar upload */}
                            {UploadComponent}
                            <Form.Control
                                onChange={(e) => setUsername(e.target.value)}
                                size="lg"
                                required
                                type="text"
                                placeholder="Username"
                            />
                            <div className="d-grid px-0">
                                <Button onClick={mintProfile} variant="primary" size="lg">
                                    Mint NFT Profile
                                </Button>
                            </div>
                        </Row>
                    </div>
                </main>
            </div>
            <div className="px-5 container">
                <Row xs={1} md={2} lg={4} className="g-4 py-5">
                    {nfts.map((nft, idx) => {
                        if (profile && nft.id === profile.id) return null;
                        return (
                            <Col key={idx} className="overflow-hidden">
                                <Card>
                                    <Card.Img variant="top" src={nft.avatar} alt="NFT Avatar" />
                                    <Card.Body color="secondary">
                                        <Card.Title>{nft.username}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className='d-grid'>
                                            <Button onClick={() => switchProfile(nft)} variant="primary" size="lg">
                                                Set as Profile
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Profile;