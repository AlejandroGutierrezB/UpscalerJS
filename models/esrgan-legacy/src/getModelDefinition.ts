import { ModelDefinitionFn, } from '@upscalerjs/core';
import { Scale, getESRGANModelDefinition, } from '../../../packages/shared/src/esrgan';
import { NAME, VERSION, } from './constants.generated';

const getModelDefinition = (scale: Scale, modelPath: string, architecture = 'rdn'): ModelDefinitionFn => getESRGANModelDefinition({
  scale,
  path: `models/${modelPath}/model.json`,
  name: NAME,
  version: VERSION,
  meta: {
    dataset: 'div2k',
    architecture,
  },
});

export default getModelDefinition;
