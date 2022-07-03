import { FieldDefinitionNode, InputValueDefinitionNode } from 'graphql';
import { IConfig } from '../../types';
import fieldHandler from './fieldHandlers';

const fieldsHandler = (
  fields: (InputValueDefinitionNode | FieldDefinitionNode)[],
  config: IConfig
) => {
  return fields.map((field) => fieldHandler(field, config)).join(',\n');
};

export default fieldsHandler;
