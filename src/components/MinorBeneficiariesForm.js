import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MinorBeneficiariesForm.css';

function MinorBeneficiariesForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        beneficiaryId: '',
        userId: '',
        beneficiaryType: '',
        accountNumber: '',
        ifscCode: '',
        bankName: '',
        beneficiaryName: '',
        nickname: '',
        email: '',
        mobileNumber: '',
        deletedAt: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/review', { state: { form } });
    };

    return (
        <div className="form-container">
            <form className="minor-beneficiaries-form" onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#4a4e69' }}>
                    Minor Beneficiaries
                </h2>
                <div>
                    <label>Beneficiary ID:</label>
                    <input
                        type="text"
                        name="beneficiaryId"
                        value={form.beneficiaryId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>User ID:</label>
                    <input
                        type="text"
                        name="userId"
                        value={form.userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Beneficiary Type:</label>
                    <input
                        type="text"
                        name="beneficiaryType"
                        value={form.beneficiaryType}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Account Number:</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={form.accountNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>IFSC Code:</label>
                    <input
                        type="text"
                        name="ifscCode"
                        value={form.ifscCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Bank Name:</label>
                    <input
                        type="text"
                        name="bankName"
                        value={form.bankName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Beneficiary Name:</label>
                    <input
                        type="text"
                        name="beneficiaryName"
                        value={form.beneficiaryName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Nickname:</label>
                    <input
                        type="text"
                        name="nickname"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MinorBeneficiariesForm;
