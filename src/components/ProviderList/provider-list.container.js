import React from "react";
import { connect } from "react-redux";
import {
  toggleProviderVisibility,
  saveProvider,
  clearDistanceFilter,
  changeDistanceFilter,
  changeVisaFilter,
  clearVisaFilter,
  displayProviderInformation
} from "redux/actions";
import { getProvidersSorted } from "redux/selectors.js";
import ProviderList from "./provider-list";

const VISA_TYPES = ["visa1", "visa2", "visa3"];

const ProviderListContainer = props => {
  return <ProviderList {...props} />;
};

const mapStateToProps = state => {
  return {
    providersList: getProvidersSorted(state),
    savedProviders: state.providers.savedProviders,
    visaTypes: VISA_TYPES,
    highlightedProviders: state.highlightedProviders,
    visibleTypes: state.providerTypes.visible,
    filters: state.filters,
    providerTypes: state.providerTypes.allIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProviderVisibility: providerType => {
      dispatch(toggleProviderVisibility(providerType));
    },
    saveProvider: id => {
      dispatch(saveProvider(id));
    },
    clearDistanceFilter: () => {
      dispatch(clearDistanceFilter());
    },
    changeDistanceFilter: distance => {
      dispatch(changeDistanceFilter(distance));
    },
    clearVisaFilter: () => {
      dispatch(clearVisaFilter());
    },
    changeVisaFilter: visa => {
      dispatch(changeVisaFilter(visa));
    },
    displayProviderInformation: id => {
      dispatch(displayProviderInformation(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderListContainer);
