/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { View, Text, TouchableHighlight } from 'react-native';

let props = {
  route: {
    uiOptions: {
      itemImage:
        "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }
  },
  uiOptions: {
    privacyURL: "https://myaccount.google.com/privacycheckup",
    tosURL: "https://termsfeed.com/blog/examples-user-agreements/"
  },
  itemDetails: {
    itemName: "Football Game 1",
    internetName: "Stanford Cardinal Football",
    eventName: null,
    startDate: "2016-05-20T20:30:00Z",
    endDate: "2016-05-22T20:30:00Z",
    timeZone: "PST8PDT",
    image:
      "https://images.unsplash.com/photo-1533923156502-be31530547c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    PrivacyPolicy: "https://myaccount.google.com/privacycheckup",
    TermsOfUse: "https://termsfeed.com/blog/examples-user-agreements/",
    details: {
      facility: {
        name: "Avalos Stadium",
        address1: "5171 California Avenue, Suite 200",
        address2: null,
        address3: null,
        address4: null,
        addressLocality: "Irvine",
        addressRegion: "CA",
        postalCode: "92617",
        addressCountry: "US",
        timeZone: "PST8PDT"
      }
    },
    displayTimes: {
      long: "2016-05-20T20:30:00Z"
    }
  }
};

it('renders correctly', () => {
  renderer.create(<App />);
});

// it('renders snapshot correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

it('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

it('renders the ActivityIndicator component', () => {
  const ActivityIndicator = require('ActivityIndicator');
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<App>', () => {
  it('updates number when clicked', () => {
    const inst = renderer.create(<App />);
    
    const button = inst.root.findByType(TouchableHighlight);
    const text = inst.root.findAllByType(Text);
    // default state
    // expect(text.props.children).toBe(2);
    // or
    expect(inst.root.instance.state.number).toBe(1);
    button.props.onPress();
    // state was updated by the button press
    // console.log(text.length(6));
    expect(text.props.children).toBe(2);
  });
});