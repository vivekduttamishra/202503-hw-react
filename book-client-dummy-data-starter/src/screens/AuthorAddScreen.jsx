import { useState } from "react";

const AddAuthorScreen = () => {
    const UNKNOWN_USER_URL = "https://avatars.githubusercontent.com/u/35440139?v=4";

    const [formData, setFormData] = useState({
        authorId: "",
        name: "",
        photo: "",
        biography: "",
        tags: "",
        socialLinks: [], // Ensure this is always an array
    });

    const [socialField, setSocialField] = useState({ key: "", value: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value, // Just update the string, no parsing
        }));
    };

    const handleAddSocial = () => {
        if (socialField.key.trim() && socialField.value.trim()) {
            setFormData((prev) => ({
                ...prev,
                socialLinks: [...(prev.socialLinks || []), socialField], // Ensure array before spreading
            }));
            setSocialField({ key: "", value: "" }); // Reset input fields
        }
    };

    const handleSocialFieldChange = (e) => {
        const { name, value } = e.target;
        setSocialField((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const authorData = {
            ...formData,
            tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag), // Removes empty values
            //.join(","), // Recreate CSV format
            photo: formData.photo.trim() || UNKNOWN_USER_URL, // Ensure default avatar if empty
        };
        console.log("Author Added:", authorData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h2 className="text-center mb-3">Add New Author</h2>

                {/* Author Image Preview */}
                <div className="text-center">
                    <img
                        src={formData.photo.trim() || UNKNOWN_USER_URL}
                        alt="Author Preview"
                        className="img-thumbnail rounded-circle"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        onError={(e) => (e.target.src = UNKNOWN_USER_URL)}
                    />
                </div>

                <form onSubmit={handleSubmit} className="mt-3">
                    {/* Author ID */}
                    <div className="mb-3">
                        <label className="form-label">Author ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="authorId"
                            value={formData.authorId}
                            onChange={handleChange}
                            required
                            placeholder="Enter unique author ID"
                        />
                    </div>

                    {/* Author Name */}
                    <div className="mb-3">
                        <label className="form-label">Author Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter author name"
                        />
                    </div>

                    {/* Author Photo */}
                    <div className="mb-3">
                        <label className="form-label">Author Photo URL</label>
                        <input
                            type="url"
                            className="form-control"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            placeholder="Enter author photo URL"
                        />
                    </div>

                    {/* Biography */}
                    <div className="mb-3">
                        <label className="form-label">Biography</label>
                        <textarea
                            className="form-control"
                            name="biography"
                            value={formData.biography}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Enter a short biography"
                        />
                    </div>

                    {/* Tags Field */}
                    <div className="mb-3">
                        <label className="form-label">Tags (comma-separated)</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="e.g., Fiction, Fantasy, Poet"
                        />
                    </div>

                    {/* Social Media Links - Dynamic Key-Value Pair */}
                    <div className="mb-3">
                        <label className="form-label">Social Links</label>
                        <div className="input-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                name="key"
                                value={socialField.key}
                                onChange={handleSocialFieldChange}
                                placeholder="e.g., Twitter"
                            />
                            <input
                                type="url"
                                className="form-control"
                                name="value"
                                value={socialField.value}
                                onChange={handleSocialFieldChange}
                                placeholder="e.g., https://twitter.com/username"
                            />
                            <button type="button" className="btn btn-outline-secondary" onClick={handleAddSocial}>
                                ➕
                            </button>
                        </div>

                        {/* Display Added Social Links */}
                        {formData.socialLinks && formData.socialLinks.length > 0 && (
                            <ul className="list-group">
                                {formData.socialLinks.map((link, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        <strong>{link.key}</strong>: <a href={link.value} target="_blank" rel="noopener noreferrer">{link.value}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Add Author</button>
                </form>
            </div>
        </div>
    );
};

export default AddAuthorScreen;
