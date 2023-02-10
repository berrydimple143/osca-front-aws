import React from "react";

export default function SelectForm({
    Space,
    Select,
    Button,
    Input,
    DatePicker,
    message,
    SearchOutlined,
    ExportOutlined,
    PrinterOutlined,
    ReloadOutlined,
    setRightInput,
    reportPage,
    disableMunicipality,
    setBarangay,
    municipalityRef,
    municipalities,
    setDateInputFrom,
    dateFromRef,
    setDateInputTo,
    dateToRef,
    reloadPage,
    handlePrinting,
    page
}) 
{
    return (
        <div className="border p-5 mr-4">
            { page !== "analytics" && (
                <Space size="middle">
                  <h1 className="text-xl">Data and Analytics - {reportPage}</h1>
                </Space>
            )}
            <div className="pt-0">
                <Space>
                  <Input.Group compact>
                      <Input style={{ width: '100px' }} disabled={true} placeholder="Type:" />
                      <Select
                        onChange={setRightInput}
                        placeholder="Select type here ..."
                        defaultValue='Municipality'
                        style={{
                          width: '213px',
                        }}
                      >
                        <Select.Option value="Municipality">All Municipality</Select.Option>
                        <Select.Option value="Barangay">Per Barangay</Select.Option>
                      </Select>
                  </Input.Group>
                  { !disableMunicipality && (
                      <Select
                        onChange={setBarangay}
                        placeholder="Select municipality here ..."
                        ref={municipalityRef}
                        style={{ width: '250px' }}
                        size="medium"
                        >
                        {" "}
                        {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                      </Select>
                  )}
                </Space>
                </div>
                <div className="pt-0">
                    <Space>
                        <Input.Group compact>
                          <Input style={{ width: '100px' }} disabled={true} placeholder="Date From:" />
                          <DatePicker
                            onChange={setDateInputFrom}
                            format='MMMM DD, YYYY'
                            ref={dateFromRef}
                            style={{ width: '212px' }}
                            size="medium"
                            placeholder="Pick a date here ..." />
                        </Input.Group>
                        <Input.Group compact>
                          <Input style={{ width: '80px' }} disabled={true} placeholder="Date To:" />
                          <DatePicker
                            onChange={setDateInputTo}
                            format='MMMM DD, YYYY'
                            ref={dateToRef}
                            style={{ width: '172px' }}
                            size="medium"
                            placeholder="Pick a date here ..." />
                        </Input.Group>
                        <Button
                            icon={<ReloadOutlined />}
                            onClick={reloadPage}
                            className="rounded-none"
                            size='default'>
                            Refresh
                        </Button>
                        <Button
                            onClick={viewData}
                            icon={<SearchOutlined />}
                            className="rounded-none"
                            size='default'>
                            Preview
                        </Button>
                        <Button
                            icon={<PrinterOutlined />}
                            onClick={handlePrinting}
                            className="rounded-none"
                            size='default'>
                            Print
                        </Button>
                        <Button
                            icon={<ExportOutlined />}
                            onClick={handleExport}
                            className="rounded-none"
                            size='default'>
                            Export
                        </Button>
                    </Space>
                </div>
            </div>
    );
}

