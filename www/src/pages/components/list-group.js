import React from 'react';

import Anchor from '../../components/Anchor';
import LinkToSource from '../../components/LinkToSource';
import PropTable from '../../components/PropTable';
import ReactPlayground from '../../components/ReactPlayground';

import Basic from '../../examples/ListGroup/Basic';
import Active from '../../examples/ListGroup/Active';
import Disabled from '../../examples/ListGroup/Disabled';
import ListGroupLinked from '../../examples/ListGroupLinked';
import ListGroupStyle from '../../examples/ListGroupStyle';
import ListGroupHeader from '../../examples/ListGroupHeader';
import ListGroupCustom from '../../examples/ListGroupCustom';

export default function ListGroupSection({ data }) {
  return (
    <div className="bs-docs-section">
      <h2 className="page-header">
        <Anchor id="listgroup">List group</Anchor>{' '}
        <small>ListGroup, ListGroupItem</small>
      </h2>

      <p>
        List groups are a flexible and powerful component for displaying a
        series of content. Modify and extend them to support just about any
        content within.
      </p>

      <h3>
        <Anchor id="listgroup-basic">Basic example</Anchor>
      </h3>
      <p>
        The most basic list group is an unordered list with list items and the
        proper classes. Build upon it with the options that follow, or with your
        own CSS as needed.
      </p>

      <ReactPlayground codeText={Basic} />

      <h3>
        <Anchor id="listgroup-active">Active items</Anchor>
      </h3>
      <p>
        Add the <code>active</code> prop to a{' '}
        <code>&lt;ListGroupItem /&gt;</code> to indicate the current active
        selection.
      </p>

      <ReactPlayground codeText={Active} />

      <h3>
        <Anchor id="listgroup-disabled">Disabled items</Anchor>
      </h3>
      <p>
        Add the <code>disabled</code> prop to a{' '}
        <code>&lt;ListGroupItem /&gt;</code> to make it appear disabled. Note
        that some elements with .disabled will also require custom JavaScript to
        fully disable their click events (e.g., links).
      </p>

      <ReactPlayground codeText={Disabled} />

      <h3>
        <Anchor id="listgroup-linked">Linked</Anchor>
      </h3>
      <p>
        Set the <code>href</code> or <code>onClick</code> prop on{' '}
        <code>ListGroupItem</code>, to create a linked or clickable element.
      </p>
      <ReactPlayground codeText={ListGroupLinked} />

      <h3>
        <Anchor id="listgroup-styling-color">Styling by color</Anchor>
      </h3>
      <p>
        Set the <code>bsStyle</code> prop to style the item
      </p>
      <ReactPlayground codeText={ListGroupStyle} />

      <h3>
        <Anchor id="listgroup-with-header">With header</Anchor>
      </h3>
      <p>
        Set the <code>header</code> prop to create a structured item, with a
        heading and a body area.
      </p>
      <ReactPlayground codeText={ListGroupHeader} />

      <h3>
        <Anchor id="listgroup-with-custom-children">
          With custom component children
        </Anchor>
      </h3>
      <p>
        When using ListGroupItems directly, ListGroup looks at whether the items
        have href or onClick props to determine which DOM elements to emit.
        However, with custom item components as children to{' '}
        <code>ListGroup</code>, set the
        <code>componentClass</code> prop to specify which element{' '}
        <code>ListGroup</code> should output.
      </p>
      <ReactPlayground codeText={ListGroupCustom} />

      <h3>
        <Anchor id="listgroup-props">Props</Anchor>
      </h3>

      <h4>
        <Anchor id="listgroup-props-group">ListGroup</Anchor>
      </h4>
      <PropTable metadata={data.ListGroup} />

      <h4>
        <Anchor id="listgroup-props-item">ListGroupItem</Anchor>
        <LinkToSource component={data.ListGroupItem.displayName} />
      </h4>
    </div>
  );
}

export const query = graphql`
  query ListGroupQuery {
    ListGroup: componentMetadata(displayName: { eq: "ListGroup" }) {
      ...PropTable_metadata
    }
    ListGroupItem: componentMetadata(displayName: { eq: "ListGroupItem" }) {
      ...PropTable_metadata
    }
  }
`;
