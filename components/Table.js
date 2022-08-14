export default function Table({ tableData, caption, indexed }) {
    return (
        <table className={indexed ? 'indexed' : ''}>
            <caption className="visuallyHidden">{caption}</caption>
            <thead>
                <tr className='thead__tr'>
                    {tableData[0].map((tableElem) => (
                        <th key={tableElem} scope="col">{tableElem}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.slice(1).map((tableRow, index) => (
                    <tr key={'row' + index}>
                        {indexed === "forward" &&
                            <th key={index} className="index" scope="row">{("0" + (index + 1)).slice(-2)}</th>
                        }
                        {indexed === "reverse" &&
                            <th key={index} className="index" scope="row">{("0" + (tableData.length - index - 1)).slice(-2)}</th>
                        }
                        {tableRow.map((tableElem) => (
                            <td key={tableElem}>{tableElem}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}