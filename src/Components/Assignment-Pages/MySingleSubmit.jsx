

const MySingleSubmit = ({ assignment,index }) => {
    const { title, marks, allocatedMarks, status } = assignment
    return (
        <tr>
            <th>{index+1}</th>
            <td>{title}</td>
            <td>{status}</td>
            <td>{allocatedMarks}</td>
            <td>{marks}</td>
        </tr>
    );
};

export default MySingleSubmit;