import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle, Search, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const sources = ['Website', 'LinkedIn', 'Referral', 'Indeed', 'Other'];
const roles = ['Front End Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Project Manager', 'DevOps Engineer'];
const genders = ['Male', 'Female', 'Prefer not to say'];

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactCode: '+971',
        contactNumber: '',
        location: '',
        source: '',
        coverLetter: '',
        jobRole: '',
        gender: '',
        experience: ''
    });

    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    // Custom dropdown states
    const [sourceDropdownOpen, setSourceDropdownOpen] = useState(false);
    const [sourceSearch, setSourceSearch] = useState('');

    const filteredSources = sources.filter(s => s.toLowerCase().includes(sourceSearch.toLowerCase()));

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            const fileName = droppedFile.name.toLowerCase();
            const isValidType = fileName.endsWith('.pdf') || fileName.endsWith('.doc') || fileName.endsWith('.docx');
            
            if (!isValidType) {
                toast.error("Images are not allowed. Please upload a PDF or Word document (.doc, .docx).");
                return;
            }
            setFile(droppedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileName = selectedFile.name.toLowerCase();
            const isValidType = fileName.endsWith('.pdf') || fileName.endsWith('.doc') || fileName.endsWith('.docx');
            
            if (!isValidType) {
                toast.error("Images are not allowed. Please upload a PDF or Word document (.doc, .docx).");
                if (fileInputRef.current) fileInputRef.current.value = ""; // clear input
                return;
            }
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            toast.error("Please upload your CV/Resume.");
            return;
        }

        setIsLoading(true);
        const submitData = new FormData();
        submitData.append('fullName', formData.fullName);
        submitData.append('email', formData.email);
        submitData.append('contactNo', `${formData.contactCode} ${formData.contactNumber}`);
        submitData.append('location', formData.location);
        submitData.append('source', formData.source);
        submitData.append('coverLetter', formData.coverLetter);
        submitData.append('jobRole', formData.jobRole);
        submitData.append('gender', formData.gender);
        submitData.append('experience', formData.experience);
        submitData.append('resume', file);

        try {
            const response = await fetch('/api/send-job-application', {
                method: 'POST',
                body: submitData,
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Application submitted successfully! Check your email.");
                setFormData({
                    fullName: '', email: '', contactCode: '+971', contactNumber: '', location: '', source: '', coverLetter: '', jobRole: '', gender: '', experience: ''
                });
                setFile(null);
            } else {
                toast.error(result.message || "Failed to submit application.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-[#1a1a2e] py-16 text-white" id="application-form">
            <div className="container mx-auto px-4 xl:px-12 max-w-[1200px]">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Start your career with Hamed Alattas Technology!</h2>
                <p className="text-gray-400 mb-12">Submit your details and CV below, and our HR team will reach out to you.</p>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
                    
                    {/* Left Column - Form Fields */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Full name <span className="text-red-500">*</span></label>
                            <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g: you@company.com" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                        </div>

                        {/* Contact No */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Contact No <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <select name="contactCode" value={formData.contactCode} onChange={handleInputChange} className="bg-transparent border border-gray-600 rounded-md py-3 px-2 text-white outline-none focus:border-[#a855f7] w-28 appearance-none">
                                    <option value="+971" className="bg-[#1a1a2e]">🇦🇪 +971</option>
                                    <option value="+966" className="bg-[#1a1a2e]">🇸🇦 +966</option>
                                    <option value="+91" className="bg-[#1a1a2e]">🇮🇳 +91</option>
                                    <option value="+1" className="bg-[#1a1a2e]">🇺🇸 +1</option>
                                </select>
                                <input required type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="50 123 4567" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g: Dubai, UAE" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                        </div>

                        {/* How did you hear about us? */}
                        <div className="relative">
                            <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                            <div className="relative">
                                <div 
                                    className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white cursor-pointer flex justify-between items-center"
                                    onClick={() => setSourceDropdownOpen(!sourceDropdownOpen)}
                                >
                                    <span className={formData.source ? "text-white" : "text-gray-500"}>
                                        {formData.source || "Select how you heard about us"}
                                    </span>
                                    <ChevronDown size={18} className="text-gray-400" />
                                </div>
                                
                                {sourceDropdownOpen && (
                                    <div className="absolute top-full left-0 w-full mt-1 bg-[#23233a] border border-gray-600 rounded-md shadow-2xl z-50 overflow-hidden">
                                        <div className="p-2 border-b border-gray-600">
                                            <input 
                                                type="text" 
                                                placeholder="Search..." 
                                                value={sourceSearch}
                                                onChange={(e) => setSourceSearch(e.target.value)}
                                                className="w-full bg-transparent border border-gray-500 rounded px-3 py-2 text-white outline-none focus:border-[#a855f7]"
                                            />
                                        </div>
                                        <div className="max-h-48 overflow-y-auto">
                                            {filteredSources.map(s => (
                                                <div 
                                                    key={s} 
                                                    className="px-4 py-3 hover:bg-[#343452] cursor-pointer"
                                                    onClick={() => {
                                                        setFormData(prev => ({...prev, source: s}));
                                                        setSourceDropdownOpen(false);
                                                    }}
                                                >
                                                    {s}
                                                </div>
                                            ))}
                                            {filteredSources.length === 0 && (
                                                <div className="px-4 py-3 text-gray-500">No results found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Cover Letter */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Cover Letter <span className="text-red-500">*</span></label>
                            <textarea required name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Tell us why you're interested in joining our team..." rows="4" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none"></textarea>
                        </div>

                        {/* Preferred Job Role */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Preferred Job Role <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select required name="jobRole" value={formData.jobRole} onChange={handleInputChange} className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white appearance-none outline-none focus:border-[#a855f7]">
                                    <option value="" disabled className="bg-[#1a1a2e]">Select Job Role</option>
                                    {roles.map(r => <option key={r} value={r} className="bg-[#1a1a2e]">{r}</option>)}
                                </select>
                                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Gender</label>
                            <div className="relative">
                                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white appearance-none outline-none focus:border-[#a855f7]">
                                    <option value="" disabled className="bg-[#1a1a2e]">Select gender</option>
                                    {genders.map(g => <option key={g} value={g} className="bg-[#1a1a2e]">{g}</option>)}
                                </select>
                                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                            </div>
                        </div>

                        {/* Years of experience */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Years of experience <span className="text-red-500">*</span></label>
                            <input required type="text" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Enter years of experience" className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all" />
                        </div>
                    </div>

                    {/* Right Column - File Upload & Submit */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-8">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold mb-1">Upload Your CV/Resume</h3>
                            <p className="text-sm text-gray-400">Upload your resume now to streamline your application process.</p>
                        </div>

                        {/* Drag and Drop Zone */}
                        <div 
                            className={`flex-grow border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-10 min-h-[400px] transition-all ${isDragging ? 'border-[#a855f7] bg-[#a855f7]/10' : 'border-gray-600 bg-transparent hover:border-gray-500'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                className="hidden" 
                                accept=".pdf,.doc,.docx" 
                            />
                            
                            {file ? (
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mb-4 text-[#10B981]">
                                        <CheckCircle size={32} />
                                    </div>
                                    <p className="font-medium text-white text-lg">{file.name}</p>
                                    <p className="text-gray-400 text-sm mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    <button 
                                        type="button" 
                                        className="mt-6 px-6 py-2 border border-gray-500 rounded-full text-sm hover:bg-white/10 transition-colors"
                                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                    >
                                        Remove File
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center cursor-pointer">
                                    <UploadCloud size={48} className="text-gray-400 mb-4" />
                                    <p className="text-white font-medium mb-1"><span className="text-[#c084fc]">Upload your resume</span> or drag and drop it here</p>
                                    <p className="text-gray-500 text-sm mb-8">Only .doc, .docx, .pdf</p>
                                    
                                    <button type="button" className="px-10 py-3 border border-gray-600 rounded-full flex items-center gap-2 hover:bg-white/5 transition-colors">
                                        <UploadCloud size={18} /> Browse File
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full mt-6 bg-gradient-to-r from-[#d946ef] to-[#a855f7] text-white font-bold text-lg py-4 rounded-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Submitting...
                                </>
                            ) : (
                                "Submit Application"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default JobApplicationForm;
