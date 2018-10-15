import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';

import UpdateUserForm from '../components/Forms/UpdateUserForm';
import { onChangeHandler, formInputs } from '../components/Forms/formData';
import RoshiErrorModal from '../components/Modal/RoshiErrorModal';
import RoshiSuccessModal from '../components/Modal/RoshiSuccessModal';
import { RoshiLoader } from '@roshi/ui';
import { getGraphqlErrorMessage } from '../utils';

const queries = require('../apollo/resolvers').Query;
const mutations = require('../apollo/resolvers').Mutation;
const {
  updatePropCallback,
  populateMutationValues,
} = require('../apollo/utils').mutations.updateCreateShared;

const UpdateUser = () => (
  <Query query={queries.GET_FETCHED_CLIENT_USER_DETAILS}>
    {({ data: { user }, error }) => {
      return (
        <Fragment>
          {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
          <Mutation
            mutation={mutations.UPDATE_USER}
            update={updatePropCallback('updateUser')}
            // Updating user values with refetch
            refetchQueries={[
              {
                query: queries.GET_CLIENT_USER_DETAILS,
                variables: { id: user.id },
              },
            ]}
          >
            {(updateUser, { loading, error, data }) => {
              const updateUserHandler = event => {
                event.preventDefault();
                updateUser({
                  variables: {
                    id: user.id,
                    update: populateMutationValues(formInputs),
                  },
                });
                // Clearing input fields
                event.target.reset();
              };

              return (
                <Fragment>
                  {loading && <RoshiLoader />}
                  {error && <RoshiErrorModal message={getGraphqlErrorMessage(error)} />}
                  {data && (
                    <RoshiSuccessModal
                      message={`${data.updateUser.email} details successfuly updated`}
                    />
                  )}
                  <UpdateUserForm
                    onChangeHandler={onChangeHandler}
                    onSubmitHandler={updateUserHandler}
                    user={user}
                  />
                </Fragment>
              );
            }}
          </Mutation>
        </Fragment>
      );
    }}
  </Query>
);

export default UpdateUser;
