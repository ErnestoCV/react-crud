import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import FormSite from "../../components/Form";
import Spinner from "../../components/Spinner";
import useSingleSite from "../../hooks/useSingleSite";

export default function FormSitePage() {
  const { id } = useParams();
  const { site, isLoading, isError } = useSingleSite({ id });
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    navigate("/404");
  }

  return (
    <>
      <FormSite site={site} />
    </>
  );
}
