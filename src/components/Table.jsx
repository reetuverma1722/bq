import React, { useState } from 'react'; // Import useState
import dummyData from '../pages/dummyData';
import millify from 'millify';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Table = () => {
    const [hoveredCard, setHoveredCard] = useState(null); // State for hovered card

    // Replace this with your actual dummy data or import it from a file
    const dummyData = [
        {
            fields: {
                bq_organization_name: 'Company A',
                documentid: '123::456',
                bq_organization_year_founded: 1990,
                bq_organization_isactive: true,
                bq_revenue_mr: 32450,
                bq_current_employees_plan_mr: 2,
                bq_organization_website: 'companya.com',
                bq_organization_subsector_name: 'Technology',
                bq_organization_address1_line_1: '123 Main St',
                bq_organization_address1_city: 'Cityville',
                bq_organization_address1_state: 'CA',
                bq_organization_address1_country: 'US',
                bq_organization_address1_zip5: '12345'
                
            }
        },
        
    ];

    const handleClick = (data, event) => {
      
    };

    const handleClick2 = (data) => {
        
    };

    const handlemapDetails = (data) => {
       
    };

    const selectedCardRef = null; 
    const SelectedCard = null; 
    const activebtn = true; 
    const img2 = ''; 

    return (
        <>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <h6>Displaying 20 of 5000 results on the page</h6>
                                <ul><li></li></ul>
                            </div>
                            <div className='tableWrap1'>
                                <table className='table table-sm'>
                                    <thead>
                                        <tr>
                                            
                                            <th><span className='twrap'><i className="fa fa-sort" aria-hidden="true"></i>Company</span></th>
                                            <th><span className='twrap'><i className="fa fa-sort" aria-hidden="true"></i>Status</span></th>
                                            <th><span className='twrap'><i className="fa fa-sort" aria-hidden="true"></i>Revenue</span></th>
                                            <th><span className='twrap'><i className="fa fa-sort" aria-hidden="true"></i>Head Count</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((d, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="detailItem">
                                                        <div className="icons">
                                                            <i className="fa fa-building-o" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="detail"
                                                            onClick={() => {
                                                                setHoveredCard(String(d?.fields?.bq_organization_name));
                                                            }}
                                                        >
                                                            <em onClick={(e) => handleClick(d, e)}
                                                                ref={d?.fields?.documentid === SelectedCard ? selectedCardRef : null}>
                                                                {d?.fields?.bq_organization_name}
                                                            </em>
                                                         <p>
                                                             BQ ID: {d?.fields?.documentid ? d?.fields?.documentid?.split("::")[1] : "N/A"}
                                                                <br />
                                                                Year Founded: {d?.fields?.bq_organization_year_founded || "N/A"}

                                                                <br />

                                                                {activebtn &&

                                                                    <span>Status: {d?.fields?.bq_organization_isactive ? "Active" : "Inactive"}

                                                                        <br />

                                                                        


                                                                        Revenue: {d?.fields?.bq_revenue_mr ? "$" + millify(d?.fields?.bq_revenue_mr) : "N/A"}

                                                                        <br />

                                                                        Headcount: {d?.fields?.bq_current_employees_plan_mr ?

                                                                            `${millify(d?.fields?.bq_current_employees_plan_mr)}` : "N/A"}

                                                                        <br />

                                                                    </span>}

                                                                <span> Website:{d?.fields?.bq_organization_website === "None" ? " N/A" :

                                                                    <a style={{ textDecoration: "none", color: " #00bef3" }}

                                                                        href={"https://" + d?.fields?.bq_organization_website}

                                                                        target="_blank"

                                                                        rel="noopener noreferrer"> {d?.fields?.bq_organization_website}</a>}

                                                                </span>

                                                               

                                                                <div className="add2">

                                                                    IRS Sub

                                                                    Sector:{d?.fields?.bq_organization_subsector_name && <> {d?.fields?.bq_organization_subsector_name === "None"

                                                                        || "" ? "N/A" : d?.fields?.bq_organization_subsector_name}

                                                                    </>}

                                                                </div>

                                                                <div className="add2">

                                                                    <span className={"icons"}>

                                                                        <OverlayTrigger

                                                                            overlay={

                                                                                <Tooltip id="tooltip">

                                                                                    Click for Benchmarks

                                                                                </Tooltip>

                                                                            }

                                                                            placement="top"

                                                                            delayShow={300}

                                                                            delayHide={150}

                                                                        >

                                                                            <img src={img2} className="img2" onClick={() => handleClick2(d?.fields)} />

                                                                        </OverlayTrigger>

                                                                    </span>Benchmarks

                                                                </div>

                                                            </p>

                                                            <p className={"add"}>

                                                                <span className={"icons"}>

                                                                    <b style={{ fontWeight: "400" }}>Map</b>

                                                                    <OverlayTrigger

                                                                        overlay={

                                                                            <Tooltip id="tooltip" style={{ zIndex: "999" }}>

                                                                                Click to search around this address location.

                                                                            </Tooltip>

                                                                        }

                                                                        placement="top"

                                                                        delayShow={300}

                                                                        delayHide={150}

                                                                    >

                                                                        <i

                                                                            style={{ cursor: "pointer" }}

                                                                            onClick={() => handlemapDetails(d)}

                                                                            className="fa fa-map-marker"

                                                                            aria-hidden="true"

                                                                        ></i>

                                                                    </OverlayTrigger>





                                                                </span>





                                                                {d?.fields?.bq_organization_address1_line_1 === "None" ? "" : d?.fields?.bq_organization_address1_line_1 + ","}{" "}

                                                                {d?.fields?.bq_organization_address1_line_2 ? d?.fields?.bq_organization_address1_line_2 === "None" ? "" : d?.fields?.bq_organization_address1_line_2 + "," : ""}

                                                                {d?.fields?.bq_organization_address1_city === "None" ? "" : d?.fields?.bq_organization_address1_city + ","}{" "}

                                                                {d?.fields?.bq_organization_address1_state === "None" ? "" : d?.fields?.bq_organization_address1_state + ","}{" "}

                                                                {d?.fields?.bq_organization_address1_country === "None" ? "" : d?.fields?.bq_organization_address1_country}{" "}

                                                                {d?.fields?.bq_organization_address1_zip5 === "None" ? "" : d?.fields?.bq_organization_address1_zip5}



                                                            </p>

                                                        </div>

                                                    </div>

                                                </td>

                                                <td>Active</td>
                                                <td>"$"{d.fields.bq_revenue_mr.toFixed(2)}</td>
                                                <td>{d.fields.bq_current_employees_plan_mr}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
