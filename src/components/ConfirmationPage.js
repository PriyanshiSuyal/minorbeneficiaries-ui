import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.form;

    useEffect(() => {
        if (!form) {
            navigate('/minorbeneficiaries');
        }
    }, [form, navigate]);

    if (!form) return null;

    return (
        <div className="confirmation-container">
            <div className="confirmation-card">
                <h2>Beneficiary Confirmed!</h2>
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
                <button onClick={() => navigate('/minorbeneficiaries')}>Add Another</button>
            </div>
        </div>
    );
}

export default ConfirmationPage;