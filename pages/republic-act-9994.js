import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import { DownloadOutlined } from '@ant-design/icons';
import { Tooltip, Divider } from 'antd';

const RepublicAct9994 = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(function(){
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <SiteLayout title="Office of the Senior Citizen's Affairs - Republic Act 9994" setLoading={setLoading}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <Hero
                page="ra9994"
                bgImage="h-screen bg-fixed bg-center bg-cover ra-9994-img"
                heading1="Republic Act 9994"
                textWidth="w-200"
            />
            <div className="flex flex-wrap justify-left items-left px-16 pt-10">
                <h1 className="text-center text-3xl font-bold">AS AMENDED, OTHERWISE KNOWN AS “AN ACT TO MAXIMIZE THE CONTRIBUTION OF SENIOR CITIZENS TO NATION BUILDING, GRANT BENEFITS AND SPECIAL PRIVILEGES AND FOR OTHER PURPOSES”</h1>
                <p className="text-base"><em>Be it enacted by the Senate and House of Representatives of the Philippine Congress Assembled:</em>
                </p>
                <p className="text-base">
                    <b>Section 1.</b> <em>Title.</em> – This Act Shall be known as the <b><em>“Expanded Senior Citizens Act of 2010.”</em></b>
                </p>
                <p className="text-base">
                    <b>Section 2.</b> Section 1 of Republic Act No. 7432, as amended by Republic Act No. 9257, otherwise known as the “Expanded Senior Citizens Act of 2003”, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    “SECTION 1. <em>Declaration of Policies and Objectives.</em> – As provided in the Constitution of the Republic of the Philippines, it is the declared policy of the State to promote a just and dynamic social order that will ensure the prosperity and independence of the nation and free the people from poverty through policies that provide adequate social services, promote full employment, a rising standard of living and an improved quality of life. In the Declaration of Principles and State Policies in Article II, Sections 10 and 11, it is further declared that the State shall provide social justice in all phases of national development and that the State values the dignity of every human person and guarantees full respect for human rights.
                </p>
                <p className="text-base">
                    “Article XIII, Section 11 of the Constitution provides that the Sate shall adopt an integrated and comprehensive approach to health development which shall endeavor to make essential goods, health and other social services available to all the people at affordable cost. There shall be priority for the needs of the underprivileged, sick, elderly, disabled, women and children. Article XV, Section 4 of the Constitution Further declares that it is the duty of the family to take care of its elderly members while the State may design programs of social security for them.
                </p>
                <p className="text-base">
                    “Consistent with these constitutional principles, this Act shall serve the following objectives:
                </p>
                <p className="text-base pl-3">
                    “(a) To recognize the rights of senior citizens to take their proper place in society and make it a concern of the family, community, and government;
                </p>
                <p className="text-base pl-3">
                    “(b) To give full support to the improvement of the total well-being of the elderly and their full participation in society, considering that senior citizens are integral part of Philippine society;
                </p>
                <p className="text-base pl-3">
                    “(c) To motivate and encourage the senior citizens to contribute to nation building;
                </p>
                <p className="text-base pl-3">
                    “(d) To encourage their families and the communities they live with to reaffirm the valued Filipino tradition of caring for the senior citizens;
                </p>
                <p className="text-base pl-3">
                    “(e) To provide a comprehensive health care and rehabilitation system for disabled senior citizens to foster their capacity to attain a more meaningful and productive ageing; and
                </p>
                <p className="text-base pl-3">
                    “(f) To recognize the important role of the private sector in the improvement of the welfare of senior citizens and to actively seek their partnership.
                </p>
                <p className="text-base">
                    “In accordance with these objectives, this Act shall:
                </p>
                <p className="text-base pl-3">
                    “(1) establish mechanisms whereby the contributions of the senior citizens are maximized;
                </p>
                <p className="text-base pl-3">
                    “(2) adopt measures whereby our senior citizens are assisted and appreciated by the community as a whole;
                </p>
                <p className="text-base pl-3">
                    “(3) establish a program beneficial to the senior citizens, their families and the rest of the community they serve: and
                </p>
                <p className="text-base pl-3">
                    “(4) establish community-based health and rehabilitation programs for senior citizens in every political unit of society.”
                </p>
                <p className="text-base">
                    <b>Section 3.</b> Section 2 of Republic Act No. 7432, as amended by Republic Act No. 9257, otherwise known as the Expanded Senior Citizens Act of 2003″, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    SEC. 2. Definition of terms. – For purposes of this Act, these terms are defined as follows:
                </p>
                <p className="text-base pl-3">
                    “(a) Senior citizen or elderly refers to any resident citizen of the Philippines at least sixty (60) years old;
                </p>
                <p className="text-base pl-3">
                    “(b) Geriatrics refer to the branch of medical science devoted to the study of the biological and physical changes and the diseases of old age;
                </p>
                <p className="text-base pl-3">
                    “(c) Lodging establishment refers to a building, edifice, structure, apartment or house including tourist inn, apartelle, motorist hotel, and pension house engaged in catering, leasing or providing facilities to transients, tourists or travelers;
                </p>
                <p className="text-base pl-3">
                    “(d) Medical Services refer to hospital services, professional services of physicians and other health care professionals and diagnostics and laboratory tests that the necessary for the diagnosis or treatment of an illness or injury;
                </p>
                <p className="text-base pl-3">
                    “(e) Dental services to oral examination, cleaning, permanent and temporary filling, extractions and gum treatments, restoration, replacement or repositioning of teeth, or alteration of the alveolar or periodontium process of the maxilla and the mandible that are necessary for the diagnosis or treatment of an illness or injury;
                </p>
                <p className="text-base pl-3">
                    “(f) Nearest surviving relative refers to the legal spouse who survives the deceased senior citizen: Provided, That where no spouse survives the decedent, this shall be limited to relatives in the following order of degree of kinship: children, parents, siblings, grandparents, grandchildren, uncles and aunts;
                </p>
                <p className="text-base pl-3">
                    “(g) Home health care service refers to health or supportive care provided to the senior citizen patient at home by licensed health care professionals to include, but not limited to, physicians, nurses, midwives, physical therapist and caregivers; and
                </p>
                <p className="text-base pl-3">
                    “(h) Indigent senior citizen, refers to any elderly who is frail, sickly or with disability, and without pension or permanent source of income, compensation or financial assistance from his/her relatives to support his/her basic needs, as determined by the Department of Social Welfare and development (DSWD) in consultation with the National Coordinating and Monitoring Board.”
                </p>
                <p className="text-base">
                    <b>Section 4.</b> Section 4 of Republic Act No. 7432, as amended by Republic Act No. 9257, otherwise known as the “Expanded Senior Citizens Act of 2003”, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    “SEC. 4. Privileges for the Senior Citizens. –
                </p>
                <p className="text-base">
                    The senior citizens shall be entitled to the following:
                </p>
                <p className="text-base pl-3">
                    “(a) the grant of twenty percent (20%) discount and exemption from the value -added tax (VAT), if applicable, on the sale of the following goods and services from all establishments, for the exclusive use and enjoyment or availment of the senior citizen
                </p>
                <p className="text-base pl-6">
                    “(1) on the purchase of medicines, including the purchase of influenza and pnuemococcal vaccines, and such other essential medical supplies, accessories and equipment to be determined by the Department of Health (DOH).
                </p>
                <p className="text-base">
                    “The DOH shall establish guidelines and mechanism of compulsory rebates in the sharing of burden of discounts among retailers, manufacturers and distributors, taking into consideration their respective margins;
                </p>
                <p className="text-base pl-6">
                    “(2) on the professional fees of attending physician/s in all private hospitals, medical facilities, outpatient clinics and home health care services;
                </p>
                <p className="text-base pl-6">
                    “(3) on the professional fees of licensed professional health providing home health care services as endorsed by private hospitals or employed through home health care employment agencies;
                </p>
                <p className="text-base pl-6">
                    “(4) on medical and dental services, diagnostic and laboratory fees in all private hospitals, medical facilities, outpatient clinics, and home health care services, in accordance with the rules and regulations to be issued by the DOH, in coordination with the Philippine Health Insurance Corporation (PhilHealth);
                </p>
                <p className="text-base pl-6">
                    “(5) in actual fare for land transportation travel in public utility buses (PUBs), public utility jeepneys (PUJs), taxis, Asian utility vehicles (AUVs), shuttle services and public railways, including Light Rail Transit (LRT), Mass Rail Transit (MRT), and Philippine National Railways (PNR);
                </p>
                <p className="text-base pl-6">
                    “(6) in actual transportation fare for domestic air transport services and sea shipping vessels and the like, based on the actual fare and advanced booking;
                </p>
                <p className="text-base pl-6">
                    “(7) on the utilization of services in hotels and similar lodging establishments, restaurants and recreation centers;
                </p>
                <p className="text-base pl-6">
                    “(8) on admission fees charged by theaters, cinema houses and concert halls, circuses, leisure and amusement; and
                </p>
                <p className="text-base pl-6">
                    “(9) on funeral and burial services for the death of senior citizens;
                </p>
                <p className="text-base pl-3">
                    “(b) exemption from the payment of individual income taxes of senior citizens who are considered to be minimum wage earners in accordance with Republic Act No. 9504;
                </p>
                <p className="text-base pl-3">
                    “(c) the grant of a minimum of five percent (5%) discount relative to the monthly utilization of water and electricity supplied by the public utilities: Provided, That the individual meters for the foregoing utilities are registered in the name of the senior citizen residing therein: Provided, further, That the monthly consumption does not exceed one hundred kilowatt hours (100 kWh) of electricity and thirty cubic meters (30 m3) of water: Provided, furthermore, That the privilege is granted per household regardless of the number of senior citizens residing therein;
                </p>
                <p className="text-base pl-3">
                    “(d) exemption from training fees for socioeconomic programs;
                </p>
                <p className="text-base pl-3">
                    “(e) free medical and dental services, diagnostic and laboratory fees such as, but not limited to, x-rays, computerized tomography scans and blood tests, in all government facilities, subject to the guidelines to be issued by the DOH in coordination with the PhilHealth;
                </p>
                <p className="text-base pl-3">
                    “(f) the DOH shall administer free vaccination against the influenza virus and pneumococcal disease for indigent senior citizen patients;
                </p>
                <p className="text-base pl-3">
                    “(g) educational assistance to senior citizens to pursue post secondary, tertiary, post tertiary, vocational and technical education, as well as short-term courses for retooling in both public and private schools through provision of scholarships, grants, financial aids, subsides and other incentives to qualified senior citizens, including support for books, learning materials, and uniform allowances, to the extent feasible: Provided, That senior citizens shall meet minimum admission requirements;
                </p>
                <p className="text-base pl-3">
                    “(h) to the extent practicable and feasible, the continuance of the same benefits and privileges given by the Government Service Insurance System (GSIS), the Social Security System (SSS) and the PAG-IBIG, as the case may be, as are enjoyed by those in actual service;
                </p>
                <p className="text-base pl-3">
                    “(i) retirement benefits of retirees from both the government and the private sector shall be regularly reviewed to ensure their continuing responsiveness and sustainability, and to the extent practicable and feasible, shall be upgraded to be at par with the current scale enjoyed by those in actual service;
                </p>
                <p className="text-base pl-3">
                    “(j) to the extent possible, the government may grant special discounts in special programs for senior citizens on purchase of basic commodities, subject to the guidelines to be issued for the purpose by the Department of Trade and Industry (DTI) and the Department of Agriculture (DA);
                </p>
                <p className="text-base pl-3">
                    “(k) provision of express lanes for senior citizens in all commercial and government establishments; in the absence thereof, priority shall be given to them; and
                </p>
                <p className="text-base pl-3">
                    “(l) death benefit assistance of a minimum of Two thousand pesos (Php2, 000.00) shall be given to the nearest surviving relative of a deceased senior citizen which amount shall be subject to adjustments due to inflation in accordance with the guidelines to be issued by the DSWD.1avvphi1
                </p>
                <p className="text-base">
                    “In the availment of the privileges mentioned above, the senior citizen, or his/her duly authorized representative, may submit as proof of his/her entitled thereto any of the following:
                </p>
                <p className="text-base pl-3">
                    “(1) an identification card issued by the Office of the Senior Citizen Affairs (OSCA) of the place where the senior citizen resides: Provided, That the identification card issued by the particular OSCA shall be honored nationwide;
                </p>
                <p className="text-base pl-3">
                    “(2) the passport of the senior citizen concerned; and
                </p>
                <p className="text-base pl-3">
                    “(3) other documents that establish that the senior citizen is a citizen of the Republic and is at least sixty (60) years of age as further provided in the implementing rules and regulations.
                </p>
                <p className="text-base">
                    “In the purchase of goods and services which are on promotional discount, the senior citizen can avail of the promotional discount or the discount provided herein, whichever is higher.
                </p>
                <p className="text-base">
                    “The establishment may claim the discounts granted under subsections (a) and (c) of this section as tax deduction based on the cost of the goods sold or services rendered: Provided, That the cost of the discount shall be allowed as deduction from gross income for the same taxable year that the discount is granted: Provided, further, That the total amount of the claimed tax deduction net of VAT, if applicable, shall be included in their gross sales receipts for tax purposes and shall be subject to proper documentation and to the provisions of the National Internal Revenue Code (NICR), as amended.”
                </p>
                <p className="text-base">
                    <b>Section 5.</b> Section 5 of the same Act, as amended, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    “SEC. 5. Government Assistance. – The government shall provide the following:
                </p>
                <p className="text-base pl-3">
                    “(a) Employment
                </p>
                <p className="text-base">
                    “Senior citizens who have the capacity and desire to work, or be re-employed, shall be provided information and matching services to enable them to be productive members of society. Terms of employment shall conform with the provisions of the Labor Code, as amended, and other laws, rules and regulations.
                </p>
                <p className="text-base">
                    “Private entities that will employ senior citizens as employees, upon the effectivity of this Act, shall be entitled to an additional deduction from their gross income, equivalent to fifteen percent (15%) of the total amount paid as salaries and wages to senior citizens, subject to the provision of Section 34 of the NIRC, as amended: Provided, however, That such employment shall continue for a period of at least six (6) months: Provided, further, That the annual income of the senior citizen does not exceed the latest poverty threshold as determined by the National Statistical Coordination Board (NSCB) of the National Economic and Development Authority (NEDA) for that year.
                </p>
                <p className="text-base">
                    “The Department of Labor and Employment (DOLE), in coordination with other government agencies such as, but not limited to, the Technology and Livelihood Resource Center (TLRC) and the Department of Trade and Industry (DTI), shall assess, design and implement training programs that will provide skills and welfare or livelihood support for senior citizens.
                </p>
                <p className="text-base pl-3">
                    “(b) Education
                </p>
                <p className="text-base">
                “The Department of Education (DepED), the Technical Education and Skills Development Authority (TESDA) and the Commission on Higher Education (CHED), in consultation with nongovernmental organizations (NGOs) and people’s organizations (POs) for senior citizens, shall institute programs that will ensure access to formal and nonformal education.
                </p>
                <p className="text-base pl-3">
                    “(c) Health
                </p>
                <p className="text-base">
                “The DOH, in coordination with local government units (LGUs), NGOs and POs for senior citizens, shall institute a national health program and shall provide an integrated health service for senior citizens. It shall train community-based health workers among senior citizens and health personnel to specialize in the geriatric care and health problems of senior citizens.
                </p>
                <p className="text-base">
                    “The national health program for senior citizens shall, among others, be harmonized with the National Prevention of Blindness Program of the DOH.
                </p>
                <p className="text-base">
                    “Throughout the country, there shall be established a “senior citizens’ ward” in every government hospital. This geriatric ward shall be for the exclusive use of senior citizens who are in need of hospital confinement by reason of their health conditions. However, when urgency of public necessity purposes so require, such geriatric ward may be used for emergency purposes, after which, such “senior citizens’ ward” shall be reverted to its nature as geriatric ward.
                </p>
                <p className="text-base pl-3">
                    “(d) Social Services
                </p>
                <p className="text-base">
                    “At least fifty percent (50%) discount shall be granted on the consumption of electricity, water, and telephone by the senior citizens center and residential care/group homes that are government-run or non-stock, non-profit domestic corporation organized and operated primarily for the purpose of promoting the well-being of abandoned, neglected, unattached, or homeless senior citizens, subject to the guidelines formulated by the DSWD.
                </p>
                <p className="text-base pl-6">
                    “(1) “self and social enhancement services” which provide senior citizens opportunities for socializing, organizing, creative expression, and self-improvement;
                </p>
                <p className="text-base pl-6">
                    “(2) “after care and follow-up services” for citizens who are discharged from the homes or institutions for the aged, especially those who have problems of reintegration with family and community, wherein both the senior citizens and their families are provided with counseling;
                </p>
                <p className="text-base pl-6">
                    “(3) “neighborhood support services” wherein the community or family members provide caregiving services to their frail, sick, or bedridden senior citizens; and
                </p>
                <p className="text-base pl-6">
                    “(4) “substitute family care ” in the form of residential care or group homes for the abandoned, neglected, unattached or homeless senior citizens and those incapable of self-care.
                </p>
                <p className="text-base pl-3">
                    “(e) Housing
                </p>
                <p className="text-base">
                    “The national government shall include in its national shelter program the special housing needs of senior citizens, such as establishment of housing units for the elderly.
                </p>
                <p className="text-base pl-3">
                    “(f) Access to Public Transport
                </p>
                <p className="text-base">
                    “The Department of Transportation and Communications (DOTC) shall develop a program to assist senior citizens to fully gain access to public transport facilities.
                </p>
                <p className="text-base pl-3">
                    “(g) Incentive for Foster Care
                </p>
                <p className="text-base">
                    “The government shall provide incentives to individuals or nongovernmental institution caring for or establishing homes, residential communities or retirement villages solely for, senior citizens, as follows:
                </p>
                <p className="text-base pl-6">
                    “(1) realty tax holiday for the first five (5) years starting from the first year of operation; and
                </p>
                <p className="text-base pl-6">
                    “(2) priority in the construction or maintenance of provincial or municipal roads leading to the aforesaid home, residential community or retirement village.
                </p>
                <p className="text-base pl-3">
                    “(h) Additional Government Assistance
                </p>
                <p className="text-base pl-6">
                    “(1) Social Pension
                </p>
                <p className="text-base">
                    “Indigent senior citizens shall be entitled to a monthly stipend amounting to Five hundred pesos (Php500.00) to augment the daily subsistence and other medical needs of senior citizens, subject to a review every two (2) years by Congress, in consultation with the DSWD.
                </p>
                <p className="text-base pl-6">
                    “(2) Mandatory PhilHealth Coverage
                </p>
                <p className="text-base">
                    “All indigent senior citizens shall be covered by the national health insurance program of PhilHealth. The LGUs where the indigent senior citizens resides shall allocate the necessary funds to ensure the enrollment of their indigent senior citizens in accordance with the pertinent laws and regulations.
                </p>
                <p className="text-base pl-6">
                    “(3) Social Safety Nets
                </p>
                <p className="text-base">
                    “Social safety assistance intended to cushion the effects of economics shocks, disasters and calamities shall be available for senior citizens. The social safety assistance which shall include, but not limited to, food, medicines, and financial assistance for domicile repair, shall be sourced from the disaster/calamity funds of LGUs where the senior citizens reside, subject to the guidelimes to be issued by the DSWD.”
                </p>
                <p className="text-base">
                    <b>Section 6.</b> Section 6 of the same Act, as amended, is heeby further amended to read as follows:
                </p>
                <p className="text-base">
                    SEC. 6. The Office for Senior Citizens Affairs (OSCA). – There shall be established in all cities and municipalities an OSCA to be headed by a senior citizen who shall be appointed by the mayor for a term of three (3) years without reappointment but without prejudice to an extension if exigency so requires. Said appointee shall be chosen from a list of three (3) nominees as recommended by a general assembly of senior citizens organizations in the city or municipality.
                </p>
                <p className="text-base">
                    “The head of the OSCA shall be appointed to serve the interest of senior citizens and shall not be removed or replaced except for reasons of death permanent disability or ineffective performance of his duties to the detriment of fellow senior citizens.
                </p>
                <p className="text-base">
                    “The head of the OSCA shall be entitled to receive an honorarium of an amount at least equivalent to Salary Grade 10 to be approved by the LGU concerned.
                </p>
                <p className="text-base">
                    “The head of the OSCA shall be assisted by the City Social Welfare and Development officer or by the Municipal Social Welfare and Development Officer, in coordination with the Social Welfare and Development Office.
                </p>
                <p className="text-base">
                    “The Office of the Mayor shall exercise supervision over the OSCA relative to their plans, activities and programs for senior citizens. The OSCA shall work together and establish linkages with accredited NGOs Pos and the barangays in their respective areas.
                </p>
                <p className="text-base">
                    “The OSCA shall have the following functions:
                </p>
                <p className="text-base pl-3">
                    “(a) To plan, implement and monitor yearly work programs in pursuance of the objectives of this Act;
                </p>
                <p className="text-base pl-3">
                    “(b) To draw up a list of available and required services which can be provided by the senior citizens;
                </p>
                <p className="text-base pl-3">
                    “(c) To maintain and regularly update on a quarterly basis the list of senior citizens and to issue national individual identification cards, free of charge, which shall be valid anywhere in the country;
                </p>
                <p className="text-base pl-3">
                    “(d) To serve as a general information and liason center for senior citizens;
                </p>
                <p className="text-base pl-3">
                    “(e) To monitor compliance of the provisions of this Act particularly the grant of special discounts and privileges to senior citizens;
                </p>
                <p className="text-base pl-3">
                    “(f) To report to the mayor, any individual, establishments, business entity, institutions or agency found violating any provision of this Act; and
                </p>
                <p className="text-base pl-3">
                    “(g) To assist the senior citizens in filing complaints or charges against any individual, establishments, business entity, institution, or agency refusing to comply with the privileges under this Act before the Department of Justice (DOJ), the Provincial Prosecutor’s Office, the regional or the municipal trial court, the municipal trial court in cities, or the municipal circuit trial court.”
                </p>
                <p className="text-base">
                    <b>Section 7.</b> Section 10 of the same Act, as amended, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    “SEC. 10. Penalties. – Any person who refuses to honor the senior citizen card issued by this the government or violates any provision of this Act shall suffer the following penalties:
                </p>
                <p className="text-base pl-3">
                    “(a) For the first violation, imprisonment of not less than two (2) years but not more than six (6) years and a fine of not less than Fifty thousand pesos (Php50,000.00) but not exceeding One hundred thousand pesos (Php100,000.00);
                </p>
                <p className="text-base pl-3">
                    “(b) For any subsequent violation, imprisonment of not less than two (2) years but not more than six (6) years and a fine of not less than One Hundred thousand pesos (Php100,000.00) but not exceeding Two hundred thousand pesos (Php200,000.00); and
                </p>
                <p className="text-base pl-3">
                    “(c) Any person who abuses the privileges granted herein shall be punished with imprisonment of not less than six (6) months and a fine of not less than Fifty thousand pesos (Php50,000.00) but not more than One hundred thousand pesos (Php100,000.00).
                </p>
                <p className="text-base">
                    “If the offender is a corporation, partnership, organization or any similar entity, the officials thereof directly involved such as the president, general manager, managing partner, or such other officer charged with the management of the business affairs shall be liable therefor.
                </p>
                <p className="text-base">
                    “If the offender is an alien or a foreigner, he/she shall be deported immediately after service of sentence.
                </p>
                <p className="text-base">
                    “Upon filing of an appropriate complaint, and after due notice and hearing, the proper authorities may also cause the cancellation or revocation of the business permit, permit to operate, franchise and other similar privileges granted to any person, establishment or business entity that fails to abide by the provisions of this Act.”
                </p>
                <p className="text-base">
                    <b>Section 8.</b> Section 11 of the same Act, as amended, is hereby further amended to read as follows:
                </p>
                <p className="text-base">
                    “SEC. 11. Monitoring and Coordinating Mechanism. – A National Coordinating and Monitoring Board shall be established which shall be composed of the following:
                </p>
                <p className="text-base pl-3">
                    “(a) Chairperson – the Secretary of the DSWD or an authorized representative;
                </p>
                <p className="text-base pl-3">
                    “(b) Vice Chairperson – the Secretary of the Department of the Interior and Local Government (DILG) or an authorized representative; and
                </p>
                <p className="text-base pl-3">
                    “(c) Members:
                </p>
                <p className="text-base pl-6">
                    “(1) the Secretary of the DOJ or an authorized representative;
                </p>
                <p className="text-base pl-6">
                    “(2) the Secretary of the DOH or an authorized representative;
                </p>
                <p className="text-base pl-6">
                    “(3) the Secretary of the DTI or an authorized representative; and
                </p>
                <p className="text-base pl-6">
                    (4) representatives from five (5) NGOs for senior citizens which are duly accredited by the DSWD and have service primarily for senior citizens. Representatives of NGOs shall serve a period of tree (3) years.
                </p>
                <p className="text-base">
                    “The Board may call on other government agencies, NGOs and Pos to serve as resource persons as the need arises. Resource person have no right to vote in the National Coordinating and Monitoring Board.”
                </p>
                <p className="text-base">
                    <b>Section 9.</b> Implementing Rules and Regulations. – Within sixty (60) days from theeffectivity of this Act, the Secretary of the DSWD shall formulate and adopt amendments to the existing rules and regulations implementing Republic Act No. 7432, as amended by Republic Act No. 9257, to carry out the objectives of this Act, in consultation with the Department of Finance, the Department of Tourism, the Housing and Urban Development Coordinating Council (HUDCC), the DOLE, the DOJ, the DILG, the DTI, the DOH, the DOTC, the NEDA, the DepED, the TESDA, the CHED, and five (5) NGOs or POs for the senior citizens duly accredited by the DSWD. The guidelines pursuant to Section 4(a)(i) shall be established by the DOH within sixty (60) days upon the effectivity of this Act.
                </p>
                <p className="text-base">
                    <b>Section 10.</b> Appropriations. – The Necessary appropriations for the operation and maintenance of the OSCA shall be appropriated and approved by the LGUs concerned. For national government agencies, the requirements to implement the provisions of this Act shall be included in their respective budgets: Provided, That the funds to be used for the national health program and for the vaccination of senior citizens in the first year of the DOH and thereafter, as a line item under the under the DOH budget in the subsequent General Appropriations Act (GAA): Provided, further, That the monthly social pension for indigent senior citizens in the first year of implementation shall be added to the regular appropriations of the DSWD budget in the subsequent GAA.
                </p>
                <p className="text-base">
                    <b>Section 11.</b> Repealing Clause. – All law, executive orders, rules and regulations or any part hereof inconsistent herewith are deemed repealed or modified accordingly.
                </p>
                <p className="text-base">
                    <b>Section 12.</b> Separability Clause. – If any part or provision of this Act shall be declared unconstitutional and invalid, such 18 declaration shall not invalidate other parts thereof which shall remain in full force and effect.
                </p>
                <p className="text-base">
                    <b>Section 13.</b> Effectivity. – This Act shall take effect fifteen (15) days its complete publication n the Official Gazette or in at least two (2) newspapers of general circulation, whichever comes earlier.
                </p>
                <p className="text-base font-bold">
                    Approved:
                </p>
                <table className="w-full text-center text-base mb-2">
                    <tbody>
                        <tr className="leading-tight">
                            <td className="border border-x-1 border-b-0 border-black pt-3">(Sgd.) <b>PROSPERO C. NOGRALES</b></td>
                            <td className="border border-x-1 border-b-0 border-black pt-3">(Sgd.) <b>JUAN PONCE ENRILE</b></td>
                        </tr>
                        <tr className="leading-tight">
                            <td className="border border-x-1 border-t-0 border-black pb-3">Speaker of the House of Representatives</td>
                            <td className="border border-x-1 border-t-0 border-black pb-3">President of the Senate</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-base">
                    This Act which is a consolidation of Senate Bill No. 3561 and House Bill No. 6390 was finally passed by the Senate and the House of Representatives on January 27, 2010.
                </p>
                <table className="w-full text-center text-base mb-2">
                    <tbody>
                        <tr className="leading-tight">
                            <td className="border border-x-1 border-b-0 border-black pt-3">(Sgd.) <b>MARILYN B. BARUA-YAP</b></td>
                            <td className="border border-x-1 border-b-0 border-black pt-3">(Sgd.) <b>EMMA LIRIO-REYES</b></td>
                        </tr>
                        <tr className="leading-tight">
                            <td className="border border-x-1 border-y-0 border-black">Secretary General</td>
                            <td className="border border-x-1 border-y-0 border-black">Secretary of Senate</td>
                        </tr>
                        <tr className="leading-tight">
                            <td className="border border-x-1 border-t-0 border-black pb-3">House of Represenatives</td>
                            <td className="border border-x-1 border-t-0 border-black pb-3">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full text-right text-base mb-3">
                    <tbody>
                        <tr className="leading-tight">
                            <td className="pt-3">
                                Approved: <b>FEB 15, 2010</b>
                            </td>
                        </tr>
                        <tr className="leading-tight">
                            <td className="pt-3">
                                (Sgd.) <b>GLORIA MACAPAGAL-ARROYO</b>
                            </td>
                        </tr>
                        <tr className="leading-tight">
                            <td className="pt-3">
                                <em>President of the Philippines</em>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-wrap justify-left items-start px-16 pt-5">
                <p className="text-base">
                    <b>DOWNLOAD</b> a <a href="https://oscabucket.s3.ap-northeast-1.amazonaws.com/frontend/files/RA_9994.pdf" target="_blank" rel="noreferrer" className="text-secondary">copy</a>.
                </p>
                <Divider />
            </div>
        </SiteLayout>
    );
}

export default RepublicAct9994;
