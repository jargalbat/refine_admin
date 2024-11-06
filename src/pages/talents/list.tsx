import React from "react";
import { useTable, List } from "@refinedev/antd";
import { Table } from "antd";

export const TalentsList = () => {
  const { tableProps } = useTable({
    resource: "talents",
    initialSorter: [{ field: "id", order: "asc" }],
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="created_at" title="Created At" />
        <Table.Column dataIndex="first_name" title="First Name" />
        <Table.Column dataIndex="last_name" title="Last Name" />
        <Table.Column dataIndex="email" title="Email" />
      </Table>
    </List>
  );
};

export default TalentsList;
