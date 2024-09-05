import React, { useState } from 'react';
import './ToDo.css';
import axios from 'axios';

const inputConfig = [
    { type: 'input', label: 'Company Name', key: 'companyName' },
    { type: 'input', label: 'City Name', key: 'cityName' },
    {
      type: 'select', label: 'Vertical', key: 'vertical', options: [
        "Select an Industry",
        "Auto  / Auto Anciliary",
        "Pharma / Healthcare",
        "Logistics / Transport / Courier",
        "Textile / Garment / Spinning / Footwear / Accessories",
        "Chemical / Process Industry",
        "Discrete",
        "Real Estate",
        "EPC / Construction",
        "FMCG",
        "BFSI",
        "Retail  / Hypermart / Trading",
        "Energy, Power  / Oil&amp;Gas",
        "Electronics",
        "Wire/cables",
        "Services / Telecom",
        "Metal and Mining",
        "Education",
        "PSU / Govt",
        "Food &amp; Breverages  / Diary",
        "Others",
        "Diversified",
        "Solar",
        "Edible Oil-Ghee"
      ]
    },
    {
      type: 'select', label: 'Priority', key: 'priority', options: [
        "Show All",
        "Cold",
        "Warm",
        "Hot",
        "Won",
        "Lost",
        "Junk"
      ]
    },
    {
      type: 'select', label: 'Contract Expiry', key: 'contractExpiry', options: [
        "--Select Month--",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    },
    {
      type: 'select', label: 'Support Partner', key: 'supportPartner', options: [
        "Select Partner",
        "Amity AKS",
        "accenture",
        "Aegis IT",
        "AG Mumbai",
        "altezays",
        "ATOS",
        "Attune",
        "Birlasoft / kpit",
        "Bosch",
        "Bristolcone",
        "Cloudway",
        "Corporateserve",
        "Capgemini",
        "Kamptos",
        "Deloitte",
        "Diverse",
        "E Business",
        "E&amp;Y",
        "EDS",
        "Fujitsu",
        "Gravity Microsystem",
        "HCL",
        "Highbar",
        "IBM",
        "Infodart",
        "Infosys",
        "Inhouse",
        "intellect bizware",
        "ITC",
        "Jivin Tech",
        "KPMG",
        "Mawai",
        "NEC India",
        "Nexus",
        "Orane",
        "other certified partner",
        "Pwc",
        "SAP LABS",
        "seal infotech",
        "Sgn",
        "Shivansh",
        "Siemens",
        "Sify",
        "Softwin",
        "Tata tech",
        "TCS",
        "Tech M",
        "uncertified partner",
        "Vayam Tech",
        "Vcentric",
        "Vikalp IT",
        "Vital wires",
        "Wipro",
        "Yash Tech",
        "Zensar",
        "L&amp;T",
        "JKT",
        "NOVELL",
        "cognizant",
        "green infotech",
        "CSC / DXC Tech",
        "primus"
      ]
    },
    {
      type: 'select', label: 'Turn Over', key: 'turnOver', options: [
        "Select",
        "0-50",
        "50-100",
        "100-150",
        "150-250",
        "250-500",
        "500-1000",
        "1000-2000",
        "2000+"
      ]
    },
    {
      type: 'select', label: 'Lead Type', key: 'leadType', options: [
        "Select",
        "SAP Installed Base",
        "Non Sap Base",
        "Market Research"
      ]
    },
    {
      type: 'select', label: 'State', key: 'state', options: [
        "Select State",
        "Andaman and Nicobar Islands",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ]
    },
    {
      type: 'select', label: 'Team', key: 'team', options: [
        "Select Team",
        "Team A",
        "Team B",
        "Team C"
      ]
    },
    {
      type: 'select', label: 'Leads', key: 'leads', options: [
        "Select Lead",
        "Lead 1",
        "Lead 2",
        "Lead 3"
      ]
    }
  ];
  

const ToDoInputForm = () => {
  const [formData, setFormData] = useState({});
  const [results, setResults] = useState([]);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/todo', { params: formData });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching ToDo items:', error);
      alert('Error fetching ToDo items');
    }
  };

  const handleNextActionChange = (e, index) => {
    const newResults = [...results];
    newResults[index].nextAction = e.target.value;
    // Update your state or perform any necessary actions here
    setResults(newResults);
  };

  return (
    <div className="container">
      <h2 className="title">TO DO LIST</h2>
      <form onSubmit={handleSearch}>
        <div className="row">
        {inputConfig.slice(0, 5).map((field, index) => (
            <div className="col" key={`input1-${index}`}>
                <label htmlFor={`input1-${index}`}>{field.label}</label>
                {field.type === 'input' ? (
                <input type="text" id={`input1-${index}`} onChange={(e) => handleChange(field.key, e.target.value)} />
            ) : (
                <select id={`input1-${index}`} onChange={(e) => handleChange(field.key, e.target.value)}>
                {field.options.map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                    ))}
                </select>
                )}
            </div>
        ))}

        </div>
        <div className="row">
        {inputConfig.slice(5, 10).map((field, index) => (
            <div className="col" key={`input2-${index}`}>
              <label htmlFor={`input2-${index}`}>{field.label}</label>
              <select id={`input2-${index}`} onChange={(e) => handleChange(field.key, e.target.value)}>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="row">
        {inputConfig.slice(10, 15).map((field, index) => (
            <div className="col" key={`input3-${index}`}>
              <label htmlFor={`input3-${index}`}>{field.label}</label>
              <select id={`input3-${index}`} onChange={(e) => handleChange(field.key, e.target.value)}>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
              <button type="submit" className="btn search">Search</button>
              <button type="reset" className="btn reset" onClick={() => setFormData({})}>Reset</button>
            </div>
          ))}
          
        </div>
      </form>
      <div className="results">
        <h3>Total Lead: {results.length}</h3>
        {results.length > 0 && (
            <table>
            <thead>
                <tr>
                <th>Lead Number</th>
                <th>Generation Date</th>
                <th>Company Name</th>
                <th>Total Cost</th>
                <th>Last Comment Date</th>
                <th>Created By</th>
                <th>Assign To</th>
                <th>Phone</th>
                <th>Action Date</th>
                <th>Priority</th>
                <th>Next Action</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                <tr key={index}>
                    <td>{result.leadNumber}</td>
                    <td>{result.generationDate}</td>
                    <td>{result.companyName}</td>
                    <td>{result.totalCost}</td>
                    <td>{result.lastCommentDate}</td>
                    <td>{result.createdBy}</td>
                    <td>{result.assignTo}</td>
                    <td>{result.phone}</td>
                    <td>{result.actionDate}</td>
                    <td>{result.priority}</td>
                    <td>
                    <select value={result.nextAction} className = "clallbtn" onChange={(e) => handleNextActionChange(e, index)}>
                        <option value="Call Back">Call Back</option>
                        <option value="Follow Up">Follow Up</option>
                        <option value="Follow Up">Event</option>
                        <option value="Close Lead">Close Lead</option>
                        {/* Add more options as needed */}
                    </select>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>

    </div>
  );
};

export default ToDoInputForm;
