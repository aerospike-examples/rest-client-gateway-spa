/*
 * WARNING: DO NOT EDIT THIS FILE. This file is generated by yarn gen. Any changes will be overwritten.
 */

import * as I from 'immutable';
import {
    KeyValueOperationsAction,
    GET_RECORD_NAMESPACE_KEY_SUCCESSFUL,
    GET_RECORD_NAMESPACE_KEY_FAILED,
    GET_RECORD_NAMESPACE_KEY_IN_PROGRESS,
    RECORD_EXISTS_NAMESPACE_KEY_SUCCESSFUL,
    RECORD_EXISTS_NAMESPACE_KEY_FAILED,
    RECORD_EXISTS_NAMESPACE_KEY_IN_PROGRESS,
    CREATE_RECORD_NAMESPACE_KEY_SUCCESSFUL,
    CREATE_RECORD_NAMESPACE_KEY_FAILED,
    CREATE_RECORD_NAMESPACE_KEY_IN_PROGRESS,
    REPLACE_RECORD_NAMESPACE_KEY_SUCCESSFUL,
    REPLACE_RECORD_NAMESPACE_KEY_FAILED,
    REPLACE_RECORD_NAMESPACE_KEY_IN_PROGRESS,
    DELETE_RECORD_NAMESPACE_KEY_SUCCESSFUL,
    DELETE_RECORD_NAMESPACE_KEY_FAILED,
    DELETE_RECORD_NAMESPACE_KEY_IN_PROGRESS,
    UPDATE_RECORD_NAMESPACE_KEY_SUCCESSFUL,
    UPDATE_RECORD_NAMESPACE_KEY_FAILED,
    UPDATE_RECORD_NAMESPACE_KEY_IN_PROGRESS,
    GET_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL,
    GET_RECORD_NAMESPACE_SET_KEY_FAILED,
    GET_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS,
    RECORD_EXISTS_NAMESPACE_SET_KEY_SUCCESSFUL,
    RECORD_EXISTS_NAMESPACE_SET_KEY_FAILED,
    RECORD_EXISTS_NAMESPACE_SET_KEY_IN_PROGRESS,
    CREATE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL,
    CREATE_RECORD_NAMESPACE_SET_KEY_FAILED,
    CREATE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS,
    REPLACE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL,
    REPLACE_RECORD_NAMESPACE_SET_KEY_FAILED,
    REPLACE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS,
    DELETE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL,
    DELETE_RECORD_NAMESPACE_SET_KEY_FAILED,
    DELETE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS,
    UPDATE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL,
    UPDATE_RECORD_NAMESPACE_SET_KEY_FAILED,
    UPDATE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS,
} from '../actions/keyValueOperationsActions';
import { ApiState } from '../state/ApiState';
import { createTypedMap } from '../../../core/types/TypedMap';

export default function keyValueOperationsReducer(
    state: ApiState,
    action: KeyValueOperationsAction
): ApiState {
    if (state == null) {
        // No state yet. create initial
        state = createTypedMap();
    } else if (!I.Iterable.isIterable(state)) {
        // State plain object. Convert to immutable.
        state = I.fromJS(state);
    }

    switch (action.type) {
        case GET_RECORD_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'getRecordNamespaceKey', 'inProgress'],
                true
            );
            break;
        case GET_RECORD_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(['keyValueOperations', 'getRecordNamespaceKey', 'inProgress'], false)
                        .removeIn(['keyValueOperations', 'getRecordNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case GET_RECORD_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(['keyValueOperations', 'getRecordNamespaceKey', 'inProgress'], false)
                        .removeIn(['keyValueOperations', 'getRecordNamespaceKey', 'successValue'])
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case RECORD_EXISTS_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'recordExistsNamespaceKey', 'inProgress'],
                true
            );
            break;
        case RECORD_EXISTS_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'recordExistsNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case RECORD_EXISTS_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'recordExistsNamespaceKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case CREATE_RECORD_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'createRecordNamespaceKey', 'inProgress'],
                true
            );
            break;
        case CREATE_RECORD_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'createRecordNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case CREATE_RECORD_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'createRecordNamespaceKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case REPLACE_RECORD_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'replaceRecordNamespaceKey', 'inProgress'],
                true
            );
            break;
        case REPLACE_RECORD_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'replaceRecordNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case REPLACE_RECORD_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'replaceRecordNamespaceKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case DELETE_RECORD_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'deleteRecordNamespaceKey', 'inProgress'],
                true
            );
            break;
        case DELETE_RECORD_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'deleteRecordNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case DELETE_RECORD_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'deleteRecordNamespaceKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case UPDATE_RECORD_NAMESPACE_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'updateRecordNamespaceKey', 'inProgress'],
                true
            );
            break;
        case UPDATE_RECORD_NAMESPACE_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'updateRecordNamespaceKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case UPDATE_RECORD_NAMESPACE_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'updateRecordNamespaceKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case GET_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'getRecordNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case GET_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn(['keyValueOperations', 'getRecordNamespaceSetKey', 'errorValue'])
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case GET_RECORD_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'getRecordNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'getRecordNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case RECORD_EXISTS_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'recordExistsNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case RECORD_EXISTS_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'recordExistsNamespaceSetKey',
                            'errorValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case RECORD_EXISTS_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'recordExistsNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'recordExistsNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case CREATE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'createRecordNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case CREATE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'createRecordNamespaceSetKey',
                            'errorValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case CREATE_RECORD_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'createRecordNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'createRecordNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case REPLACE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'replaceRecordNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case REPLACE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'replaceRecordNamespaceSetKey',
                            'errorValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case REPLACE_RECORD_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'replaceRecordNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'replaceRecordNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case DELETE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'deleteRecordNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case DELETE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'deleteRecordNamespaceSetKey',
                            'errorValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case DELETE_RECORD_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'deleteRecordNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'deleteRecordNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;

        case UPDATE_RECORD_NAMESPACE_SET_KEY_IN_PROGRESS:
            state = state.setIn(
                ['keyValueOperations', 'updateRecordNamespaceSetKey', 'inProgress'],
                true
            );
            break;
        case UPDATE_RECORD_NAMESPACE_SET_KEY_SUCCESSFUL:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'updateRecordNamespaceSetKey',
                            'errorValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceSetKey', 'successValue'],
                            payload
                        )
                        .setIn(['last', 'successValue'], payload)
                        .removeIn(['last', 'errorValue'])
                );
            }
            break;
        case UPDATE_RECORD_NAMESPACE_SET_KEY_FAILED:
            {
                const payload = I.fromJS(action.payload);
                state = state.withMutations(map =>
                    map
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceSetKey', 'inProgress'],
                            false
                        )
                        .removeIn([
                            'keyValueOperations',
                            'updateRecordNamespaceSetKey',
                            'successValue',
                        ])
                        .setIn(
                            ['keyValueOperations', 'updateRecordNamespaceSetKey', 'errorValue'],
                            I.fromJS(action.payload)
                        )
                        .removeIn(['last', 'successValue'])
                        .setIn(['last', 'errorValue'], payload)
                );
            }
            break;
    }

    return state;
}
