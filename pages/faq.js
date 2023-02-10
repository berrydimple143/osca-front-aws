import { Collapse } from 'antd';
import Hero from '../components/front/Hero';
import Corner from '../components/front/Corner';
import SiteLayout from '../components/layouts/SiteLayout';
import React, { useState, useEffect } from "react";
import ModalLoading from '../components/ModalLoading';

const { Panel } = Collapse;

const q1 = "How often do you get a raise at OSCA?";
const ans1 = "Almost never.";
const q2 = "What is the work from home policy at OSCA?";
const ans2 = "2 days work from home, 3 days in office.";
const q3 = "What is the best part of working at OSCA?";
const ans3 = "Good environment.";
const q4 = "What questions did they ask during your interview at OSCA?";

export default function Faq() {
  const [loading, setLoading] = useState(false);

  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        setLoading(false);
    }, 1000);
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - FAQ" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <div className="flex flex-col mt-10 py-20 px-10">
              <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
              <Collapse defaultActiveKey={['']} onChange={onChange}>
                  <Panel header={`${q1}`} key="1">
                    <p className="pl-5">{ans1}</p>
                  </Panel>
                  <Panel header={`${q2}`} key="2">
                    <p className="pl-5">{ans2}</p>
                  </Panel>
                  <Panel header={`${q3}`} key="3">
                    <p className="pl-5">{ans3}</p>
                  </Panel>
                  <Panel header={`${q4}`} key="4">
                    <p className="pl-5">
                        1) Asked about past jobs and what I did at each position.<br/>
                        2) Why I thought I was best suited for the job. What traits do I have that would help me in this position.
                    </p>
                  </Panel>
              </Collapse>
        </div>
    </SiteLayout>
  )
}
