const companies = [
    {
        _id: '1',
        name: 'slack',
        section: 'Social Media',
        description: 'improves communication inside company'
    },
    {
        _id: '2',
        name: 'ProofHub',
        section: 'Task Management',
        description: 'is an all-in-one business management software that helps businesses manage work in a way that everything can be kept organized in one place.'
    },
    {
        _id: '3',
        name: 'Workato',
        section: 'Payroll',
        description: 'A SINGLE PLATFORM FOR INTEGRATION & WORKFLOW AUTOMATION ACROSS YOUR ORGANIZATION'
    },
    {
        _id: '4',
        name: 'Marvia',
        section: 'Brand Management',
        description: 'Tools to leverage local marketing potential. Manage and scale brands consistently across locations with consistent, on-brand, localized creative.'
    },
    {
        _id: '5',
        name: 'Facebook',
        section: 'Social Media',
        description: 'improves communication inside company'
    },
    {
        _id: '6',
        name: 'Domo',
        section: 'Task Management',
        description: 'improves communication inside company'
    },
    {
        _id: '7',
        name: 'VS Code',
        section: 'Development',
        description: 'improves communication inside company'
    }
];

export function getCompanies() {
    return companies;
}

export function getCompany(id) {
    return companies.find(c => c._id === id);
}