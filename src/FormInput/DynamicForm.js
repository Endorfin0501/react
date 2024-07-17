import React, { useState } from 'react';
import axios from 'axios';
import {URL} from '../url'

const DynamicForm = ({ fields, endpoint, repairName, orderNum }) => {
    const [formData, setFormData] = useState(() => {
        const initialData = {};
        fields.forEach(field => {
            initialData[field.name] = '';
        });
        initialData['repair_name'] = repairName || '';
        initialData['order_num'] = orderNum || '';
        initialData['tag'] = 0;
        return initialData;
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const tag = parseInt(formData.tag, 10) || 0; // 确保 tag 是数字
            const repairName = encodeURIComponent(formData.repair_name.trim());
            const uploadUrl = `${URL}/upload/${formData.repair_name}`;
            console.log('Upload URL:', uploadUrl);
            console.log('Form Data:', { ...formData, tag: tag + 1 });

            const response = await axios.put(uploadUrl, { ...formData, tag: tag + 1 }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Data uploaded successfully:', response.data);
        } catch (error) {
            console.error('There was an error uploading the data!', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <input
                    key={field.name}
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder || field.name}
                />
            ))}
            <button className={'btn btn-primary'} type="submit">Upload Data</button>
        </form>
    );
};

export default DynamicForm;