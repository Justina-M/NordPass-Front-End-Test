import { useState, useEffect, useCallback } from "react";
import { useApi } from "../hooks/useApi";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout/Layout";
import SortableTable from "../components/ui/SortableTable/SortableTable";
import LoadingSpinner from "../components/ui/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage/ErrorMessage";
import Accordion from "../components/ui/Accordion/Accordion";
import Section from "../components/layout/Section/Section";

const SORTABLE_TABLE_COLUMNS = [
  {
    heading: "Password",
    dataKey: "value",
    dataType: "string",
    sortAlias: "ABC",
  },
  {
    heading: "",
    dataKey: "count",
    dataType: "number",
    sortAlias: "Count",
  },
];

const FAQ = [
  {
    id: 1,
    heading: "Why should you use a password manager for business?",
    content:
      "<p>Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager. </p><p> With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!</p>",
  },
  {
    id: 2,
    heading: "How to choose the best password manager for business?",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
  },
  {
    id: 3,
    heading: "How can I get a business password manager?",
    content:
      "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  },
];

const BusinessPage = () => {
  const { isLoading, error, sendRequest } = useApi();
  const [passwords, setPasswords] = useState([]);

  const getPasswords = useCallback(async () => {
    const data = await sendRequest(
      "https://playground.nordsec.com/v2/worst-psw.json"
    );

    if (data && data?.passwords) setPasswords(data.passwords);
  }, [sendRequest]);

  useEffect(() => {
    getPasswords();
  }, [getPasswords]);

  return (
    <Layout>
      <Hero />
      <Section id="top-leaked-passwords">
        <h2 className="text-h2 mb-7">Top Leaked Passwords</h2>
        {passwords.length !== 0 && !error && !isLoading && (
          <SortableTable
            data={passwords}
            columns={SORTABLE_TABLE_COLUMNS}
            sortedByKey="count"
            sortedByKeyType="number"
            showRows={10}
          />
        )}
        {isLoading && !error && <LoadingSpinner />}
        {error && !isLoading && <ErrorMessage>{error}</ErrorMessage>}
      </Section>
      <Section id="FAQ" className="bg-grey-lightest">
        <h2 className="text-h2 mb-7">Frequently asked questions</h2>
        <Accordion data={FAQ} />
      </Section>
    </Layout>
  );
};

export default BusinessPage;
