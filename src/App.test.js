import * as React from "react";
import {  mount, shallow } from "enzyme";
import Enzyme from 'enzyme';
import btn from "./Button";
import * as renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Button component", () => {
  console.log("*****inside test file*********");

  it("should render the button", () => {
    const component = shallow(<btn />);
  console.log('inside first test');
  });




  // it("should render the button", () => {
  //   const component = renderer.create(button);
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });



  // it("test for on Click event using snapshot testing", () => {
  //   const shallowButton = shallow(button);
  //   shallowButton.find("button").simulate("click");
  //   console.log('****test****');
  //
  //   //let tree = shallowButton.toJSON();
  //   expect(toJSON(shallowButton)).toMatchSnapshot();
  //
  // });
  //
  // it("should be default styled if no style passed in", () => {
  //   const btn = mount(<Button />);
  //   expect(btn.hasClass("btn-default")).toBe(true);
  // });
  //
  // it("should add the loading class when prop is provided", () => {
  //   const btn = mount(<Button loading />);
  //   expect(btn.hasClass("is-loading")).toBe(true);
  // });
  //
  // it("should add the disable class when prop is provided", () => {
  //   const btn = mount(<Button disabled />);
  //   expect(btn.hasClass("disabled")).toBe(true);
  // });
  //
  // it("should add an icon when prop is provided", () => {
  //   const btn = mount(<Button disabled />);
  //   expect(btn.find("i")).toBeTruthy();
  // });
  //
  // it("should run the onclick handler when clicked", () => {
  //   const mockFn = jest.fn();
  //   const btn = mount(<Button onClick={mockFn} />);
  //   btn.find("button").simulate("click");
  //   expect(mockFn).toHaveBeenCalled();
  // });
  //
  // it("should render text passed in as child", () => {
  //   const content = "My button";
  //   const btn = mount(<Button>{content}</Button>);
  //   expect(btn.text()).toBe(content);
  // });
  //
  // it("should pass arbitrary classes down to the button", () => {
  //   const btn = mount(<Button className="test" />);
  //   expect(btn.hasClass("test")).toBe(true);
  // });

});
