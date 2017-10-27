import {
  ElementLocation, ElementLocationType, ElementVisibility
} from '../../../common/models';

import { LocatableElement } from '.';

export class MethodElement extends LocatableElement {

  public constructor(
    elementVisibility: ElementVisibility,
    elementLocation: ElementLocation,
    text: string) {
    super(elementVisibility, elementLocation, text);
  }

  protected get configKindDescription(): string {
    return 'method';
  }
}