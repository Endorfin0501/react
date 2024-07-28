import React, { useState } from 'react';
import axios from 'axios';

const DynamicCreatForm = ({ fields, defaultValues, endpoint, modelName }) => {
    const [formData, setFormData] = useState(() => {
        const initialData = {};
        fields.forEach(field => {
            initialData[field.name] = defaultValues[field.name] || '';
        });
        initialData['model'] = modelName;
        return initialData;
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(endpoint, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Data uploaded successfully:', response.data);
            // 清除错误信息
            setError('');
            window.location.reload();
        } catch (error) {
            console.error('There was an error uploading the data!', error);
            setError('There was an error uploading the data. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name} className="form-group">
                    <label htmlFor={field.name}>{field.placeholder || field.name}</label>
                    <input
                        id={field.name}
                        type={field.type || 'text'}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        placeholder={field.placeholder || field.name}
                        className="form-control"
                    />
                </div>
            ))}
            <button className={'btn btn-primary'} type="submit">創建表單</button>
            {error && <p className="text-danger">{error}</p>} {/* 显示错误信息 */}
        </form>
    );
};

export default DynamicCreatForm;
