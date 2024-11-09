import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './DonationList.css'; 
import { useAuth0 } from "@auth0/auth0-react";


axios.defaults.baseURL = "http://localhost:8080/";

const DonationsList = () => {

    
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true); 
    

    const getFetchedData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/");
            console.log('Datalist def:', response); 
            console.log('Datalist frg:', response.data);
            if (response.data.success) {
                setDataList(response.data.users); 
                console.log('Datalist abcd:', dataList); 
            } 
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handledelete = async (id) => {
        try {
            const data = await axios.delete("/delete/" + id);
            
            if (data.data.sucess) {
                getFetchedData();
                alert(data.data.message);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user. Please try again later.");
        }
        finally{
            window.location.reload()
        }
    };


    useEffect(() => {
        getFetchedData();
    }, []);


    console.log('Datalist abcdddd:', dataList);


    return (
        <div className="donations-list">
            <Header />
            <div className="donation-intro">
                <h2>Support Our Mission</h2>
                <p>
                    Thank you for visiting our donations page! Your contributions make a significant difference in the lives of those in need. Below, you can see a list of recent donations that have helped us provide essential resources like food, clothing, shelter, and education to communities in need.
                </p>
                <p>
                    We value transparency, so we've provided the details of all contributions made to our organization. Every donation—no matter how big or small—helps us reach our goals and create a better future for the less fortunate.
                </p>
                <p>
                    If you would like to contribute, please click the <strong>Donate</strong> button below or contact us for more information.
                </p>
            </div>
            
            <h1>Donations List</h1>
            {loading ? ( 
                <p>Loading...</p>
            ) : dataList.length === 0 ? (
                <p>No donations available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Amount</th>
                            <th>Details</th>
                            <th>PROGRESS</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((donation) => (
                            <tr key={donation._id}>
                                <td>{donation.name}</td>
                                <td>{donation.email}</td>
                                <td>{donation.mobile}</td>
                                <td>{donation.address || 'N/A'}</td>
                                <td>{donation.amount || 'N/A'}</td>
                                <td>{donation.donationtype || 'N/A'}</td>
                                <td>IN PROGRESS</td>
                                <td><button onClick={() => handledelete(donation._id)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Footer />
        </div>
    );
};

export default DonationsList;
