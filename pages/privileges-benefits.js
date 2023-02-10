import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import { Divider } from 'antd';
import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';

export default function PrivilegesBenefits() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Privileges & Benefits" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="privileges"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            heading1="PRIVILEGES & BENEFITS"
            textWidth="w-200"
        />
        <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-md font-bold">RULE IV</h2>
            <h2 className="text-md font-bold">PRIVILEGES FOR THE SENIOR CITIZENS</h2>
            <div className="px-10 text-md">
                <p><b>Article 6.</b> OSCA-issued Senior Citizens’ Identification Card. – For the availment of benefits and privileges under the Act and these Rules, the senior citizen, or his/her duly authorized representative, shall present as proof of eligibility, a valid and original Senior Citizens’ Identification Card issued by the Head of the Office of Senior Citizens Affairs (OSCA) of the place where the senior citizen resides, and which shall be honored nationwide.
                </p>
                <p><b>Article 7.</b> Twenty Percent (20%) Discount and VAT Exemption – The senior citizens shall be entitled to the grant of twenty percent (20%) discount and to an exemption from the value-added tax (VAT), IF APPLICABLE, on the sale of the goods and services covered by Section 1 to 6 of this Article, from all establishments for the exclusive use and enjoyment or availment of senior citizens.
                </p>
                <p>
                   For this purpose, the Department of Finance (DOF) through the Bureau of Internal Revenue (BIR) shall come up with the appropriate Revenue Regulations on the 20% senior citizens discount and VAT exemption within thirty (30) days from effectivity of these Rules that shall cover among others, new invoicing procedures, reportorial requirements, and a system for claiming tax deductions.
                </p>
                <p>
                    <b>Section 1.</b> <em>MEDICAL_RELATED PRIVILEGES</em>
                </p>
                <p>
                    (a) <b>MEDICINE AND DRUG PURCHASES</b> – The 20% discount and VAT exemption shall apply to the purchase of generic or branded medicines and drugs by or for senior citizens, including the purchase of influenza and pneumococcal vaccines. The 20% discount and VAT exemption shall also be granted to the purchase of vitamins and mineral supplements which are medically prescribed by an attending physician for prevention and treatment of diseases, illness, or injury.
                </p>
                <p>
                    (b) <b>ESSENTIAL MEDICAL SUPPLIES, ACCESSORIES AND EQUIPMENT</b> – The 20% discount and VAT exemption privilege shall also apply to the purchase of eyeglasses, hearing aids, dentures, prosthetics, artificial bone replacements like steel, walkers, crutches, wheelchairs whether manual or electric-powered, canes/quad canes, geriatric diapers, and other essential medical supplies, accessories and equipment by or for senior citizens.
                </p>
                <p>
                    The purchase under Sections 1 (a) and (b) from drug stores, hospital pharmacies, medical and optical clinics and similar establishments including non-traditional outlets dispensing medicines, shall be subject to guidelines that shall be issued by the DOH within thirty (30) days from effectivity of these Rules, in coordination with the Food and Drug Administration (FDA) and the Philippine Health Insurance Corporation (PHILHEALTH). Said guidelines shall also indicate what constitutes discounted essential medical supplies, accessories and equipment as contemplated by Section 1 (b), and will be subjected to a regular review as deemed necessary in keeping with the changes, demands and needs of senior citizens.
                </p>
                <p>
                    The guidelines issued by the DOH, in consultation with the DOF and the BIR, shall also establish mechanisms of compulsory rebates in the sharing of burden of discounts among retailers, manufacturers and distributors, taking into consideration their respective margins. When necessary, the DOF and the BIR shall come up with the appropriate Revenue Regulations for this purpose.
                </p>

                <p>(c) <b>MEDICAL AND DENTAL SERVICES IN THE PRIVATE FACILITIES</b> – Medical and dental services, diagnostic and laboratory tests such as but not limited to X-Rays, computerized tomography scans, and blood tests, that are requested by a physician as necessary for the diagnosis and/or treatment of an illness or injury are subjected to the 20% discount and VAT exemption.
                </p>
                <p>
                (d) <b>PROFESSIONAL FEES OF ATTENDING PHYSICIAN/S</b> in all private hospitals, medical facilities, outpatient clinics and home health care facilities shall be subjected to the 20% discount and VAT exemption.
                </p>
                <p>
                (e) <b>PROFESSIONAL FEES OF LICENSED HEALTH WORKERS PROVIDING HOME HEALTH CARE SERVICES</b> as endorsed by private hospitals or employed through home health care employment agencies are entitled to the 20% discount and VAT exemption. The burden of the discount shall be borne solely by the employment agency given the health worker’s very minimal share compared to the agency fee.
                </p>

                <p><b>Section 2.</b> DOMESTIC TRANSPORTATION PRIVILEGES</p>
                <p>
                The Department of Transportation and Communication (DOTC), in coordination with the Maritime Industry Authority (MARINA), Philippine Ports Authority (PPA), the Civil Aeronautics Board (CAB), Light Rail Transit Authority (LRTA), Philippine National Railways (PNR), Mass Rail Transit Authority (MRTA) and Land Transportation Franchising and Regulatory Board (LTFRB), shall within thirty (30) days from effectivity of these Rules issue the necessary circulars or directives on the following transportation privileges of senior citizens:
                </p>
                <p>
                (a) <b>AIR AND SEA TRANSPORTATION PRIVILEGES</b> – Fare for domestic air, and sea travel, including \f0 advanced booking, shall be subject to the 20% discount and VAT exemption, if applicable.
                </p>
                <p>
                    (b) <b>PUBLIC LAND TRANSPORTATION PRIVILEGES</b> – Fare in the public railways including LRT, MRT, and PNR, fares in buses (PUB), jeepneys (PUJ), taxi and shuttle services (AUV), are likewise subject to the 20% discount and VAT exemption, if applicable.
                </p>
                <p>
                    <b>Section 3.</b> HOTELS, RESTAURANTS, RECREATIONAL CENTERS, AND PLACES OF LEISURES, AND FUNERAL SERVICES
                </p>
                <p>
                    The Department of Interior and Local Government (DILG) and Department of Tourism (DOT) shall, within thirty (30) days from effectivity of these Rules, issue the necessary circulars or directives to establishments for its implementation to ensure compliance herewith.
                </p>
                <p>
                (a) <b>HOTELS AND SIMILAR LODGING ESTABLISHMENTS</b> – The discount shall be for room accommodation and other amenities offered by the establishment such as but not limited to hotel-based parlors and barbershops, restaurants, massage parlor, spa, sauna bath, aromatherapy rooms, workout gyms, swimming pools, Jacuzzis, ktv bars, internet facilities, food, drinks and other services offered. The term “hotel” shall include beach and mountain resorts,
                </p>
                <p>
                    (b) <b>RESTAURANTS</b> – The discount shall be for the purchase of food, drinks, dessert, and other consumable items served by the establishments offered for the consumption of the general public.
                </p>
                <p>
                    (c) For Dine-in services under paragraphs (a) and (b) of Section 3, and Section 4, paragraph 2 of Article 7, the privilege must be personally availed of by the senior citizen as defined under these Rules, and no proxies or authorization in favor of another person who is not a senior citizen will be honored.
                </p>
                <p>
                (d) Consistent with the intent of the Act, the phrase “exclusive use and enjoyment” of the senior citizen shall mean “for the senior citizen’s personal consumption” only. As such, the 20% senior citizen discount shall not apply to “children’s meals” which are primarily prepared and intentionally marketed for children. Similarly, the 20% senior citizen discount shall not apply to “pre-contracted” party packages or bulk orders.
                </p>
                <p>
                (e) Food, drinks and other consumable items provided in Section 3 (a) and (b), and Section 4, paragraph 2 of Article 7 purchased by the senior citizen shall be processed separately as an independent transaction from his/her non-eligible companions to ensure that it is for his/her exclusive consumption and to enable computation of the 205 discount and the exemption from the Value Added Tax (VAT), which only the senior citizen is entitled to.
                </p>
                <p>
                However, if the group of diners is composed entirely of senior citizens, all of whom present valid senior citizens IDs, each shall be entitled to a 20% discount and exemption from Value Added Tax.
                </p>
                <p>
                (f) The 20% discount shall apply to Take-Out/Take-Home/Drive-Thru orders as long as it is the senior citizen himself/herself who is present and personally ordering, and he/she can show a valid senior citizen ID card.
                </p>
                <p>
                (g) For Delivery Orders, the 20% discount shall likewise apply subject to certain conditions; i.e. senior citizen ID card number must be given while making the order over the telephone; the senior citizen ID card must also be presented upon delivery to verify the identity of the senior citizen entitled to the 20% discount.
                </p>
                <p>
                (h) For the above-mentioned transactions under paragraphs (f) and (g) of Section 3 of Article 7, the Most Expensive Meal Combination (MEMC) shall apply to food purchases by senior citizens. The MEMC is an amount corresponding to the combination of the most expensive and biggest single-serving meal with beverage served in a quick service restaurant, is deemed flexible and is adjusted accordingly by food establishments to estimate a single food purchase for an individual senior citizen.
                </p>
                <p>
                <b>Section 4.</b> <em>RECREATION CENTERS</em> – The discount shall be for the utilization of services in the form of fees, charges and rental for sport facilities or equipment, including golfcart rentals and green fees, or venues for ballroom dancing, yoga, badminton courts, bowling lanes, table or lawn tennis, workout gyms, martial arts facilities.
                </p>
                <p>
                Non-profit, stock golf and country clubs which are not open to the general public, and are private and for exclusive membership only as duly proven by their official Securities and Exchange (SEC) registration papers, are not mandated to give the 20% senior citizens discount. However, should restaurants and food establishments inside these country clubs be independent concessionaires and food sold are not consumable items under club membership dues, they must grant the 20% senior citizen discount.
                </p>
                <p>
                <b>Section 5.</b> <em>ADMISSION FEES PRIVILEGE</em> – The discount shall be applied to admission fees charged by theaters, cinema houses and concert halls, circuses, carnivals, and other similar places of culture, leisure and amusement such as museums and parks.
                </p>
                <p>
                <b>Section 6.</b> <em>FUNERAL AND BURIAL SERVICES</em> – The beneficiary or any person who shall shoulder the funeral and burial expenses of the deceased senior citizen, shall claim the discount under this Rule for the deceased senior citizen upon presentation of the death certificate. Such expenses shall cover the purchase of casket or urn, embalming, hospital morgue, transport of the body to intended burial site in the place of origin, but shall exclude obituary publication and the cost of the memorial lot.
                </p>
                <p>
                <b>Article 8. CREDIT CARD PAYMENTS</b> – The 20% discount and VAT exemption shall also apply to purchases of goods and services by senior citizens paying through credit cards.
                </p>
                <p>
                <b>Article 9. NO DOUBLE DISCOUNTS</b> – In the purchase of goods and services which are on promotional discount, the senior citizen can avail of the establishment’s offered discount or the 20% discount provided herein, whichever is higher and more favorable.
                </p>
                <p>
                In cases where the senior citizen is also a person with disability (PWD) entitled to a 20% discount under his/her valid PWD identification card (ID), the senior citizen shall use either his/her OSCA-issued ID card or PWD ID card to avail of the 20% discount.
                </p>
                <p>
                <b>Article 10. TAX DEDUCTION</b> – The establishment may claim the discounts provided herein as tax deductions based on the cost of the goods sold or services rendered: Provided. That the cost of the discount shall be allowed as deduction from the gross income for the same taxable year that the discount is granted: Provides, further, That the total amount of the claimed tax deduction net of VAT, if applicable, shall be included in their gross sales receipts for tax purposes and shall be subject to proper documentation and to the provisions of the National Internal Revenue Code (NIRC), as amended.
                </p>
                <p>
                For this purpose, the Department of Finance (DOF) through the Bureau of Internal Revenue (BIR) shall come up with the appropriate Revenue Regulations on the 20% senior citizens discount and VAT exemption within thirty (30) days from effectivity of these Rules.
                </p>
                <p>
                <b>Article 11. OTHER PRIVILEGES</b>
                </p>
                <p>
                <b>Section 1.</b> <em>INCOME TAX EXEMPTION</em> – The senior citizen shall be entitled to exemption from the payment of the individual income tax, provided he/she is considered to be minimum wage earner in accordance with Republic Act No. 9504.
                </p>
                <p>
                <b>Section 2.</b> <em>EXEMPTION FROM TRAINING FEES</em> – The senior citizen shall be exempted from training fees for socio-economic programs conducted by private and government agencies subject to the guidelines to be issued within thirty (30) days from effectivity of these Rules by the DTI, the Department of Labor and Employment (DOLE), the DA, the Technical Education and Skills Development Authority (TESDA) and the Department of Science and Technology – Technology Resource Center (DOST-TRC).
                </p>
                <p>
                <b>Section 3.</b> <em>FREE MEDICAL AND DENTAL SERVICES IN GOVERNMENT FACILITIES</em> – Medical and dental services, diagnostic and laboratory tests requested by the physician such as but not limited to X-rays, computerized tomography scans, and blood tests availed of by senior citizens, including professional fees of attending doctors in all government hospitals, medical facilities, outpatient clinics, and home health care services, shall be provided free of charge to senior citizens. These shall be in accordance with the rules and regulation to be issued by the DOH, in coordination with the PHILHEALTH.
                </p>
                <p>
                <b>Section 4.</b> <em>FREE VACCINATION FOR INDIGENT SENIOR CITIZENS</em> – The DOH shall, subject to technical and operational guidelines which it shall issue not later than thirty (30) days from effectivity of these Rules, administer free vaccinations against the influenza virus and pneumococcal disease for indigent senior citizen patients. Neglected, abandoned, unattached or homeless senior citizens in government-run residential homes, centers and facilities shall likewise be entitled to free vaccinations under these Rules.
                </p>
                <p>
                The DOH shall enjoin all government and private hospitals, as well as other health facilities to post, publish or print out a schedule of health benefits and privileges i.e., laboratory and diagnostic test fees, which should be regularly updated. These postings and publications shall be clearly identified in the guidelines.
                </p>
                <p>
                <b>Section 5.</b> <em>EDUCATIONAL PRIVILEGES</em> – Educational assistance shall be granted to senior citizens to pursue post secondary, post tertiary, as well as vocational or technical education in both public and private schools through provision of scholarships, grants, financial aid, subsidies and other incentives to qualified senior citizens, including support for books, learning materials, and uniform allowance, to the extent feasible: Provided, that senior citizens shall meet minimum admission requirements.
                </p>
                <p>
                <b>Section 6.</b> <em>BENEFITS AND PRIVILEGES FOR RETIREES</em> – To the extent practicable and feasible, the senior citizen shall be granted the continuance of the same benefits and privileges given by the Government Service Insurance System (GSIS), Social Security System (SSS) and PAG-IBIG, as the case may be, as are enjoyed by those in active service.
                </p>
                <p>
                Retirement benefits of retirees from both the government and the private sector shall be regularly reviewed every year to ensure their continuing responsiveness and sustainability, and to the extent practicable and feasible, shall be upgraded to be at par with the current scale enjoyed by those in actual service based on National Economic and Development Authority (NEDA) poverty threshold per region as determined by the National Statistical Coordination Board (NSCB).
                </p>
                <p>
                <b>Section 7.</b> <em>PRIVILEGES ON GRANTING SPECIAL DISCOUNTS IN SPECIAL PROGRAMS</em> – To the extent possible, the government may grant special discounts in special programs for senior citizens on purchase of basic necessities and prime commodities, subject to the guidelines to be issued for the purpose by the DTI and the DA within (30) days from effectivity of these Rules. Provided, That such special programs and their guidelines shall be developed by the concerned department within the concerned department’s jurisdiction.
                </p>
                <p>
                <b>Section 8.</b> <em>EXPRESS LANES PRIVILEGES</em> – Accessible express lanes for senior citizens shall be provided in all private, banking, commercial, and government establishments; in the absence thereof, priority shall be given to them.
                </p>
                <p>
                <b>Article 12. UTILITY DISCOUNTS</b>
                </p>
                <p>
                <b>Section 1.</b> <em>Five (5%) Discount</em> – The grant of a minimum of five percent (5%) discount relative to the monthly utilization of water and electricity by households with senior citizens; Provided, That the individual meters for the foregoing utilities are registered in the name of the senior citizen residing therein: provided, further, that the monthly consumption does not exceed one hundred kilowatt hours (100 kWh) of electricity and thirty cubic meters (30m’) of water: Provided, furthermore, that the privilege is granted per household regardless of the number of senior citizens residing therein.
                </p>
                <p>
                To avail of the discount under this Section, the senior citizen shall:
                </p>
                <p>
                1. Apply for the discount personally or thru a representative. There shall be annual renewal of application to the utility provider.
                </p>
                <p>
                2. Submit requirements.
                </p>
                <p>
                a. Proof of age and citizenship
                </p>
                <p>
                b. Proof of billing. Meter registration should be in the name of the senior citizen for a period of one year
                </p>
                <p>
                c. Proof of residence
                </p>
                <p>
                <b>Section 2.</b> <em>Fifty (50%) Discount</em> – The grant of a 50% discount an all electricity, water, telephone consumption for DSWD-accredited senior citizens centers and residential care institutions or group homes that are government-run or organized and operated by non-stock, non-profit domestic corporations, primarily for the purpose of promoting the well-being of abandoned, neglected, unattached or homeless senior citizens.
                </p>
                <p>
                Such senior citizens centers and residential care or group homes must have been in operation for at least six (6) months and must have a separate meter for said utilities/services.
                </p>
                <p>
                <b>Section 3.</b> DSWD shall issue the necessary guidelines within (30) days from effectivity of these Rules for the accredited senior citizens centers and residential/group homes willing to avail of the utility discount.
                </p>
                <p>
                The Energy Regulatory Commission (ERC), the Metropolitan Waterworks and Sewerage System (MWSS), the Local Water Utility Administration (LWUA) and other concerned utility-regulatory agencies shall, within six (6) months after the effectivity of these Rules, formulate supplemental guidelines to cover recovery rate mechanics and/or sharing of burden, among other concern of the distribution utilities.
                </p>
            </div>
            <h2 className="text-md font-bold">RULE V</h2>
            <h2 className="text-md font-bold">GOVERNMENT ASSISTANCE</h2>
            <div className="px-10 text-md">
                <p>
                <b>Article 13. EMPLOYMENT</b>
                </p>
                <p>
                <b>Section 1.</b> Senior citizens, who have the capacity and desire to work, or to be re-employed, shall be provided by the DOLE, in coordination with other government agencies including local government units, with information and matching services to enable them to be productive members of society. Terms of employment shall conform to the provisions of the Labor Code, as amended, Civil Service Laws and other laws, rules and regulations.
                </p>
                <p>
                <b>Section 2.</b> Private entities that shall employ senior citizens as employees upon effectivity of the Act, shall be entitled to an additional deduction from their gross Income, equivalent to fifteen percent (15%) of the total amount paid as salaries and wages to senior citizens subject to the provision of Section 34 of the National Internal Revenue Code (NIRC), as amended and the Revenue Regulations to be issued by the BIR and approved by the DOF; Provided, however, That such employment shall continue for a period of at least six (6) months; Provided, further, That the net annual income of the senior citizen does not exceed the poverty level for that year as determined by NEDA thru the NSCB.
                </p>
                <p>
                <b>Section 3.</b> The DOLE, in coordination with other government agencies, such as, but not limited to, the DOST-Technology Resource Center (DOST-TRC) and the DTI, shall assess, design and implement training programs that will provide free of charge to senior citizens the appropriate skills development, livelihood training programs, and welfare or livelihood support.
                </p>
                <p>
                <b>Article 14. EDUCATION</b>
                </p>
                <p>
                The Department of Education (DepEd), the DOST-TRC, the Technical Education and Skills Development Authority (TESDA), and the Commission on Higher Education (CHED), in consultation with non-governmental (NGOs) and people’s organizations (POs) for senior citizens, shall institute a program that will ensure access of senior citizens to formal and non-formal education. They are to:
                </p>
                <p>
                a) Formulate and implement relevant and effective course designs and educational programs;
                </p>
                <p>
                b) Conduct the necessary training for the implementation of the appropriate curriculum for the purpose;
                </p>
                <p>
                c) Ensure the availability of the needed-educational facilities in the form of modular programs and other distance and alternative learning materials;
                </p>
                <p>
                d) In coordination with OSCA and the City or Municipal Social Welfare and Development Officer, shall conduct assessment and profiling of senior citizens who wanted to study; and
                </p>
                <p>
                e) Conduct continuing research and development program for the necessary and relevant education of the senior citizens.
                </p>
                <p>
                <b>Article 15. HEALTH</b>
                </p>
                <p>
                <b>Section 1.</b> The DOH, in coordination with local government units (LGUs), NGOs and POs for senior citizens, shall institute a national health program that shall incorporate the National Prevention of Blindness Program, and shall also provide an integrated health service for senior citizens.
                </p>
                <p>
                It shall train community-based health workers including barangay health workers, among senior citizens and health personnel to specialize in geriatric care, gerontology, and health problems of senior citizens.
                </p>
                <p>
                <b>Section 2.</b> The National Health Program aims to promote healthy and productive older population through the following:
                </p>
                <p>
                a) Establishment and provision of a comprehensive and integrated health service package catering to the specific needs of the citizens;
                </p>
                <p>
                b) Human resource development/capacity building of health personnel in relation to the care and health problems of senior citizens;
                </p>
                <p>
                c) Health promotion;
                </p>
                <p>
                d) Conduct of researches and study in geriatric care, gerontology, and health needs of senior citizens;
                </p>
                <p>
                e) In coordination with the municipal health worker, designate one (1) barangay health worker to attend to senior citizens’ health needs;
                </p>
                <p>
                f) The barangay, in coordination with local office health office shall designate one day of every month specifically for medical attention of senior citizens;
                </p>
                <p>
                g) Establishment of senior citizens’ ward in every government hospital and in all levels of hospitals throughout the country; and
                </p>
                <p>
                h) Provision of accessible express lanes, or prioritization, in all health facilities.
                </p>
                <p>
                <b>Section 3.</b> Provide technical assistance in coordination with DSWD, NGOs and other concerned agencies to local government units in the establishment of community based health rehabilitation programs.
                </p>
                <p>
                <b>Article 16. SOCIAL SERVICES</b>
                </p>
                <p>
                The DSWD, in cooperation with the OSCA and the local government units, non-governmental organizations and people” organizations for senior citizens, shall develop and implement programs and social services for senior citizens. Local government units shall ensure that the developed programs and social services are provided. The components of these programs are:
                </p>
                <p>
                a) Self and social enhancement services which provide senior citizens opportunities for socializing, organizing, creative expression, and improvement of self;
                </p>
                <p>
                b) After care services for senior citizens who are discharged from the homes/institutions for the aged, especially those who have problems of reintegration with family and community, wherein both the senior citizens and their families are provided with counseling;
                </p>
                <p>
                c) Neighborhood support services/home care wherein the community or family members provide caregiving services to their frail, sick, or bedridden senior citizens; and
                </p>
                <p>
                d) Substitute family care in the form of residential care, group homes, or foster homes for the abandoned, neglected, unattached or homeless senior citizens and those incapable of self-care.
                </p>
                <p>
                e) Inclusion of community-based settings as practicum for academic institutions and in the curriculum of caregiving and technical vocational schools.
                </p>
                <p>
                <b>Article 17. HOUSING</b>
                </p>
                <p>
                The national government shall include in its national shelter program the special housing needs of senior citizens, such as establishment of housing units for the elderly.
                </p>
                <p>
                <b>Section 1.</b> The Housing and Land Use Regulatory Board (HLURB) shall formulate housing rules on how to develop subdivision suitable to the requirements of male and female senior citizens. The Home Development Mutual Fund (HDMF) shall promote the establishment of elderly residence and shall review its existing circulars particularly the limitation of the age requirements of sixty-five (65) years old at the date of the loan application and seventy (70) years old at loan maturity. It shall also consider the concept of pension in lieu compensation.
                </p>
                <p>
                <b>Section 2.</b> The housing program for the poor senior citizens which include the establishment/donation of group/foster homes for the neglected, abused and unattached or homeless senior citizens and those incapable of self-care including its management, maintenance and operations shall be established in accordance with EO 105, approving and directing the implementation of the program, “Provision of Group/Foster Home for Neglected, Abandoned, Abused, Unattached and Poor Older Persons and Persons with Disabilities” promulgated on May 16, 2002.
                </p>
                <p>
                <b>Article 18. ACCESS TO PUBLIC TRANSPORT</b>
                </p>
                <p>
                The DOTC and its attached agencies and sectoral officers shall improve the implementation or programs to assist senior citizens to fully gain access in the use of public transport facilities. The minimum requirements and standards to make transportation facilities and utilities for public use accessible to senior citizens shall be developed to enhance the mobility of senior citizens. There shall be strict implementation of courtesy space and seats for the exclusive use of senior citizens in all transport system. As far as practicable, PUVs shall also strive to install safe lower stepping boards.
                </p>
                <p>
                <b>Article 19. INCENTIVE FOR FOSTER CARE</b>
                </p>
                <p>
                The DILG through the local government units, in consultation with the DOF and the BIR which shall provide the necessary guidelines, shall provide incentives to persons or NGO institutions implementing foster care programs for senior citizens, as follows:
                </p>
                <p>
                (a) reality tax holiday for the first five (5) years starting from the first year of operation and/or implementation of foster care program; and
                </p>
                <p>
                (b) priority in the construction, or maintenance of provincial or municipal roads leading to the aforesaid home, residential community or retirement village.
                </p>
                <p>
                <b>Article 20. ADDITIONAL GOVERNMENT ASSISTANCE</b>
                </p>
                <p>
                <b>Section 1.</b> <em>SOCIAL PENSION</em> – Pursuant to the eligibility criteria as may be determined by the DSWD, indigent senior citizens shall be entitled to a monthly stipend amounting to Five hundred pesos (Php 500.00) to augment the daily subsistence and other medical needs of senior citizens. The grant of social pension shall be subject to a review every two (2) years by Congress, in consultation with the DSWD within three months after convening the Congress.
                </p>
                <p>
                The DSWD, in consultation with the Department of Budget and Management (DBM), the DILG, the NCMB, NGOs, and people’s organizations shall formulate guidelines within thirty (30) days from effectivity of these Rules for the development of criteria, selection of, and establishment of database for indigent senior citizens focusing on targeting, delivery, monitoring and evaluation, to facilitate implementation of this additional government assistance.
                </p>
                <p>
                <b>Section 2.</b> <em>MANDATORY PHILHEALTH COVERAGE</em> – All indigent senior citizens shall be covered by the national health insurance program of PHILHEALTH. The local government units where the indigent senior citizens reside shall allocate the necessary funds to ensure the enrollment and lifetime coverage of their indigent senior citizens, in accordance with the pertinent laws and regulations.
                </p>
                <p>
                <b>Section 3.</b> <em>SOCIAL SAFETY NETS</em> – Social safety assistance intended to cushion the effects of economic shocks; disasters and calamities shall be available for senior citizens. The social safety assistance which shall include, but not limited to, food, medicines, and financial assistance for domicile repair, shall be sourced from the disaster/calamity funds of local government units where the senior citizens reside, subject to the guidelines to be issued by the DSWD in coordination with DILG.
                </p>
                <p>
                <b>Section 4.</b> <em>DEATH BENEFIT ASSISTANCE</em> – Death benefit assistance of a minimum of Two thousand pesos (Php 2, 000.00) shall be given to the nearest surviving relative who took care of the deceased senior citizens reside, subject to the guidelines to be issued by the DSWD and DILG.
                </p>
                <p>
                In keeping with the intention of the law and similar government assistance being granted, this benefit shall apply in relation to deceased indigent senior citizens only. However, it will not preclude LGUs already granting burial assistance to continue giving such benefit to non-indigent senior citizens.
                </p>
                <Divider />
            </div>
        </div>
    </SiteLayout>
  )
}
