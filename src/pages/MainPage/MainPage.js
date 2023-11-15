import { elements } from "@constants";
import Table from "@pages/MainPage/Table";
import { useState } from "react";
import SelectedElement from "./SelectedElement";
import {
  PageWrapper,
  SelectedElementBlock,
  TableBlock,
} from "./styledComponents";

const initializeSelectedElement = () => {
  const id = localStorage.getItem("selectedItemId") || 0;
  return elements.find((element) => element.id === +id) || elements[0];
};
function MainPage() {
  const [selectedElement, setSelectedElement] = useState(
    initializeSelectedElement(),
  );

  const setSelectedElementWithLocalStore = (element) => {
    localStorage.setItem("selectedItemId", element.id);
    setSelectedElement(element);
  };

  return (
    <PageWrapper>
      <SelectedElementBlock>
        {!!selectedElement && (
          <SelectedElement selectedElement={selectedElement} />
        )}
      </SelectedElementBlock>
      <TableBlock>
        <Table
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElementWithLocalStore}
        />
      </TableBlock>
    </PageWrapper>
  );
}

export default MainPage;
