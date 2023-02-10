import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import { DownloadOutlined } from '@ant-design/icons';
import { Tooltip, Divider } from 'antd';

const RepublicAct7432 = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(function(){
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <SiteLayout title="Office of the Senior Citizen's Affairs - Republic Act 7432" setLoading={setLoading}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <Hero
                page="ra7432"
                bgImage="h-screen bg-fixed bg-right bg-cover ra-7432-img"
                heading1="Republic Act 7432"
                textWidth="w-200"
            />
            <div className="flex flex-wrap justify-left items-start px-16 pt-10">
                <h1 className="text-center text-3xl font-bold">An Act to Maximize the Contribution of Senior Citizens to Nation Building, Grants Benefits and Special Privileges</h1>
                <p className="text-base"><b>Section 1. Declaration of Policies and Objectives.</b> — Pursuant to Article XV, Section 4 of the Constitution, it is the duty of the family to take care of its elderly members while the State may design programs of social security for them. In addition to his, Section 10 in the Declaration of Principles and State Policies provides: “The State shall provide social justice in all phases of national development.” Further, Article XIII, Section 11 provides: “The State shall adopt an integrated and comprehensive approach to health development which shall endeavor to make essential goods, health and other social services available to all the people at affordable cost. There shall be priority for the needs of the underprivileged, sick, elderly, disabled, women and children.” Consonant with these constitutional principles the following are the declared policies of this Act:</p>
                <p className="text-base pl-3">
                    (a) to motivate and encourage the senior citizens to contribute to nation building;
                </p>
                <p className="text-base pl-3">
                    (b) to encourage their families and the communities they live with to reaffirm the valued Filipino tradition of caring for the senior citizens.
                </p>
                <p className="text-base">
                    In accordance with those policies, this Act aims to:
                </p>
                <p className="text-base pl-3">
                    (1) establish mechanisms whereby the contribution of the senior citizens are maximized;
                </p>
                <p className="text-base pl-3">
                    (2) adopt measures whereby our senior citizens are assisted and appreciated by the community as a whole;
                </p>
                <p className="text-base pl-3">
                    (3) establish a program beneficial to the senior citizens, their families and the rest of the community that they serve.
                </p>
                <p className="text-base">
                    <b>Sec. 2. Definition of Terms.</b> — As used in this Act, the term “senior citizen” shall mean any resident citizen of the Philippines at least sixty (60) years old, including those who have retired from both government offices and private enterprises, and has an income of not more than Sixty thousand pesos (P60,000.00) per annum subject to review by the National Economic and Development Authority (NEDA) every three (3) years.
                </p>
                <p className="text-base">
                    The term “benefactor” shall mean any person whether related to the senior citizens or not who takes care of him/her as a dependent.
                </p>
                <p className="text-base">
                    The term “head of the family” shall mean any person so defined in the National Internal Revenue Code.
                </p>
                <p className="text-base">
                    <b>Sec. 3. Contribution to the Community.</b> — Any qualified senior citizen as determined by the Office for Senior Citizen Affairs (OSCA) may render his/her services to the community which shall consist of, but not limited to, any of the following:
                </p>
                <p className="text-base pl-3">
                    (a) tutorial and/or consultancy services;
                </p>
                <p className="text-base pl-3">
                    (b) actual teaching and demonstration of hobbies and income generating skills;
                </p>
                <p className="text-base pl-3">
                    (c) lectures on specialized fields like agriculture, health, environmental protection and the like;
                </p>
                <p className="text-base pl-3">
                    (d) the transfer of new skills acquired by virtue of their training mentioned in Section 4, paragraph d;
                </p>
                <p className="text-base pl-3">
                    (e) undertaking other appropriate services as determined by the Office of Senior Citizens Affairs (OSCA) such as school traffic guide, tourist aid, pre-school assistant, etc.
                </p>
                <p className="text-base">
                    In consideration of the services rendered by the qualified elderly, the Office for Senior Citizens Affairs (OSCA) may award or grant benefits or privileges to the elderly, in addition to the other privileges provided for under Section 4 hereof.
                </p>
                <p className="text-base">
                    <b>Sec. 4. Privileges for the Senior Citizens.</b> — The senior citizens shall be entitled to the following:
                </p>
                <p className="text-base pl-3">
                    (a) the grant of twenty percent (20%) discount from all establishments relative to utilization of transportation services, hotels and similar lodging establishment, restaurants and recreation centers and purchase of medicine anywhere in the country: Provided, That private establishments may claim the cost as tax credit;
                </p>
                <p className="text-base pl-3">
                    (b) a minimum of twenty percent (20%) discount on admission fees charged by theaters, cinema houses and concert halls, circuses, carnivals and other similar places of culture, leisure, and amusement;
                </p>
                <p className="text-base pl-3">
                    (c) exemption from the payment of individual income taxes: Provided, That their annual taxable income does not exceed the property level as determined by the National Economic and Development Authority (NEDA) for that year;
                </p>
                <p className="text-base pl-3">
                    (d) exemption form training fees for socioeconomic programs undertaken by the OSCA as part of its work;
                </p>
                <p className="text-base pl-3">
                    (e) free medical and dental services in government establishment anywhere in the country, subject to guidelines to be issued by the Department of Health, the Government Service Insurance System and the Social Security System;
                </p>
                <p className="text-base pl-3">
                    (f) to the extent practicable and feasible, the continuance of the same benefits and privileges given by the Government Service Insurance System (GSIS), Social Security System (SSS) and PAG-IBIG, as the case may be, as are enjoyed by those in actual service.
                </p>
                <p className="text-base">
                    <b>Sec. 5. Government Assistance.</b> — The Government shall provide the following assistance to those caring for and living with the senior citizen:
                </p>
                <p className="text-base pl-3">
                    (a) The senior shall be treated as dependents provided for in the National Internal Revenue Code and as such, individual taxpayers caring for them, be they relatives or not shall be accorded the privileges granted by the Code insofar as having dependents are concerned.
                </p>
                <p className="text-base pl-3">
                    (b) Individuals or non-governmental institutions establishing homes, residential communities or retirement villages solely for the senior citizens shall be accorded the following:
                </p>
                <p className="text-base pl-6">
                        (1) realty tax holiday for the first five (5) years starting from the first year of operation;
                </p>
                <p className="text-base pl-6">
                        (2) priority in the building and/or maintenance of provincial or municipal roads leading to the aforesaid home, residential community or retirement village.
                </p>
                <p className="text-base">
                    <b>Sec. 6. Retirement Benefits.</b> — To the extent practicable and feasible, retirement benefits from both the Government and the private sectors shall be upgraded to be at par with the current scale enjoyed by those in actual service.
                </p>
                <p className="text-base">
                   <b>Sec. 7. The Office for Senior Citizens Affairs (OSCA).</b> — There shall be established in the Office of the Mayor an OSCA to be headed by a Councilor who shall be designated by the Sangguniang Bayan and assisted by the Community Development Officer in coordination with the Department of Social Welfare and Development. The functions of this office are:
                </p>
                <p className="text-base pl-3">
                    (a) to plan, implement and monitor yearly work programs in pursuance of the objectives of this Act;
                </p>
                <p className="text-base pl-3">
                    (b) to draw up a list of available and required services which can be provided by the senior citizens;
                </p>
                <p className="text-base pl-3">
                    (c) to maintain and regularly update on a quarterly basis the list of senior citizens and to issue nationally uniform individual identification cards which shall be valid anywhere in the country;
                </p>
                <p className="text-base pl-3">
                    (d) to service as a general information and liaison center to serve the needs of the senior citizens.
                </p>
                <p className="text-base">
                    <b>Sec. 8. Municipality Responsibility.</b> — It shall be the responsibility of the municipality through the mayor to ensure that the provisions of this Act are implemented to its fullest.
                </p>
                <p className="text-base">
                    <b>Sec. 9. Penalties.</b> — Violation of any provision of this Act for which no penalty is specifically provided under any other law, shall be punished by imprisonment not exceeding one (1) month or a fine not exceeding One thousand pesos (P1,000.00) or both.
                </p>
                <p className="text-base">
                    <b>Sec. 10. Implementing Rules and Regulations.</b> — The Secretary of Social Welfare and Development, jointly with the Department of Finance, the Department of Tourism, the Department of Health, the Department of Transportation and Communications and the Department of Interior and Local Government shall issue the necessary rules and regulations to carry out the objectives of this Act.
                </p>
                <p className="text-base">
                    <b>Sec. 11. Appropriation.</b> — The necessary appropriation for the operation and maintenance of the OSCA shall be appropriated and approved by the local government units concerned. The National Government shall appropriate such amount, as may be necessary to carry out the objectives of this Act.
                </p>
                <p className="text-base">
                    <b>Sec. 12. Repealing Clause.</b> — All provisions of laws, orders, decrees, including rules and regulations inconsistent herewith are hereby repealed and/or modified accordingly.
                </p>
                <p className="text-base">
                    <b>Sec. 13. Separability Clause.</b> — If any part or provision of this Act shall be held to be unconstitutional or invalid, other provisions hereof which are not affected thereby shall continue to be in full force and effect.
                </p>
                <p className="text-base">
                    <b>Sec. 14. Effectivity.</b> — This Act shall take effect fifteen (15) days following its publication in one (1) national newspaper of general circulation.
                </p>
                <p className="text-base">
                    Approved:
                </p>
                <table className="w-full text-center text-base mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2">(Sgd.) <b>RAMON V. MITRA</b></td>
                            <td className="border border-black p-2">(Sgd.) <b>NEPTALI A. GONZALES</b></td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2"><em>Speaker of the House of Representatives</em></td>
                            <td className="border border-black p-2"><em>President of the Senate</em></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-base">
                    This Act which is a consolidation of Senate Bill No. 835, 1435 and House Bill No. 35335 was finally passed by both the Senate and the House of Representatives on and February 7, 1992.
                </p>
                <table className="w-full text-center text-base mb-2">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2">(Sgd.) CAMILO L. SABIO</td>
                            <td className="border border-black p-2">(Sgd.) ANACLETO D. BADOY, JR.</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2"><em>Secretary General, House of Representatives</em></td>
                            <td className="border border-black p-2"><em>Secretary of the Senate</em></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-base">
                    Approved: April 23, 1992
                </p>
            </div>
            <div className="flex flex-wrap justify-left items-start px-16">
                <p className="text-base">
                    <b>DOWNLOAD</b> a <a href="https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/files/republic_act_7432.pdf" target="_blank" rel="noreferrer" className="text-secondary">copy</a>.
                </p>
                <Divider />
            </div>
        </SiteLayout>
    );
}

export default RepublicAct7432;
