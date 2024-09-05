const express = require('express');
const app = express();
const PORT = 8080;

// Vertical options
const verticalOptions = [
  "Auto / Auto Anciliary", "Pharma / Healthcare", "Logistics / Transport / Courier", 
  "Textile / Garment / Spinning / Footwear / Accessories", "Chemical / Process Industry", 
  "Discrete", "Real Estate", "EPC / Construction", "FMCG", "BFSI", 
  "Retail / Hypermart / Trading", "Energy, Power / Oil & Gas", "Electronics", 
  "Wire/cables", "Services / Telecom", "Metal and Mining", "Education", 
  "PSU / Govt", "Food & Breverages / Diary", "Others", "Diversified", "Solar", 
  "Edible Oil-Ghee"
];

// Priority options
const priorityOptions = [
  "Cold", "Warm", "Hot", "Won", "Lost", "Junk"
];

// Contract expiry options
const contractExpiryOptions = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Support partner options
const supportPartnerOptions = [
  "Amity AKS", "accenture", "Aegis IT", "AG Mumbai", "altezays", "ATOS", "Attune", 
  "Birlasoft / kpit", "Bosch", "Bristolcone", "Cloudway", "Corporateserve", "Capgemini", 
  "Kamptos", "Deloitte", "Diverse", "E Business", "E&Y", "EDS", "Fujitsu", 
  "Gravity Microsystem", "HCL", "Highbar", "IBM", "Infodart", "Infosys", 
  "Inhouse", "intellect bizware", "ITC", "Jivin Tech", "KPMG", "Mawai", 
  "NEC India", "Nexus", "Orane", "other certified partner", "Pwc", "SAP LABS", 
  "seal infotech", "Sgn", "Shivansh", "Siemens", "Sify", "Softwin", "Tata tech", 
  "TCS", "Tech M", "uncertified partner", "Vayam Tech", "Vcentric", 
  "Vikalp IT", "Vital wires", "Wipro", "Yash Tech", "Zensar", "L&T", 
  "JKT", "NOVELL", "cognizant", "green infotech", "CSC / DXC Tech", "primus"
];

// Turnover options
const turnoverOptions = [
  "0-50", "50-100", "100-150", "150-250", "250-500", "500-1000", 
  "1000-2000", "2000+"
];

// Lead type options
const leadTypeOptions = [
  "SAP Installed Base", "Non Sap Base", "Market Research"
];

// State options
const stateOptions = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", 
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telengana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Team options
const teamOptions = [
  "Sujata_sghosh@sagetl.com"
];

// Lead options
const leadOptions = [
  "All Leads", "My added Leads", "My Assign leads"
];

// API routes to serve the options
app.get('/api/options/vertical', (req, res) => {
  res.json(verticalOptions);
});

app.get('/api/options/priority', (req, res) => {
  res.json(priorityOptions);
});

app.get('/api/options/contract-expiry', (req, res) => {
  res.json(contractExpiryOptions);
});

app.get('/api/options/support-partner', (req, res) => {
  res.json(supportPartnerOptions);
});

app.get('/api/options/turnover', (req, res) => {
  res.json(turnoverOptions);
});

app.get('/api/options/lead-type', (req, res) => {
  res.json(leadTypeOptions);
});

app.get('/api/options/state', (req, res) => {
  res.json(stateOptions);
});

app.get('/api/options/team', (req, res) => {
  res.json(teamOptions);
});

app.get('/api/options/lead', (req, res) => {
  res.json(leadOptions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
