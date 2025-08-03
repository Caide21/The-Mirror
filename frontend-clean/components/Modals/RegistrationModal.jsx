import { useState } from "react";

export default function RegistrationModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    focusAreas: [],
    project: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const updated = checked
        ? [...prev.focusAreas, value]
        : prev.focusAreas.filter(f => f !== value);
      return { ...prev, focusAreas: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/5 border border-white/10 text-white p-8 rounded-2xl w-full max-w-lg shadow-xl relative backdrop-blur-md">
        <button className="absolute top-4 right-5 text-white text-xl" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-6">📜 Register Before Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/30 placeholder-white/60 border border-white/10"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/30 placeholder-white/60 border border-white/10"
          />
          <select
            name="role"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 text-white"
          >
            <option value="">Your Role</option>
            <option value="Student">Student</option>
            <option value="Founder">Founder</option>
            <option value="Architect">Architect</option>
            <option value="Coach">Coach</option>
            <option value="Other">Other</option>
          </select>

          <fieldset>
            <legend className="font-semibold mb-2">Focus Areas</legend>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["GPT", "Notion", "Automation", "Symbolic System Design"].map(option => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.focusAreas.includes(option)}
                    onChange={handleCheckboxChange}
                    className="accent-white"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <textarea
            name="project"
            rows={3}
            placeholder="Describe your project or goal..."
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/30 placeholder-white/60 border border-white/10"
          />

          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition w-full"
          >
            Book a Slot 📅
          </button>
        </form>
      </div>
    </div>
  );
}
