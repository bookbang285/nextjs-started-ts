import Loading from "@components/Loading";
import dynamic from "next/dynamic";
import React from "react";

export default function asyncComponent<T>(importComponent: any) {
  return dynamic<T>(importComponent, {
    loading: () => <Loading />,
  });
}
