import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReviewPage.css';

function ReviewPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.form;

    // Redirect if no form data
    React.useEffect(() => {
        if (!form) {
            navigate('/minorbeneficiaries');
        }
    }, [form, navigate]);

    if (!form) return null;

    const handleConfirm = () => {
        // Pass form data to confirmation page
        navigate('/confirmation', { state: { form } });
    };

    const handleEdit = () => {
        navigate('/minorbeneficiaries', { state: { form } });
    };

    return (
        <div className="review-container">
            <div className="review-card">
                <h2>Review Minor Beneficiary</h2>
                <div className="review-details">
                    <ul>
                        <li><strong>Beneficiary ID:</strong> {form.beneficiaryId}</li>
                        <li><strong>User ID:</strong> {form.userId}</li>
                        <li><strong>Beneficiary Type:</strong> {form.beneficiaryType}</li>
                        <li><strong>Account Number:</strong> {form.accountNumber}</li>
                        <li><strong>IFSC Code:</strong> {form.ifscCode}</li>
                        <li><strong>Bank Name:</strong> {form.bankName}</li>
                        <li><strong>Beneficiary Name:</strong> {form.beneficiaryName}</li>
                        <li><strong>Nickname:</strong> {form.nickname}</li>
                        <li><strong>Email:</strong> {form.email}</li>
                        <li><strong>Mobile Number:</strong> {form.mobileNumber}</li>

                    </ul>
                </div>
                <div className="review-actions">
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewPage;