import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VehicleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vehicle {
  readonly id: string;
  readonly make?: string | null;
  readonly model?: string | null;
  readonly color?: string | null;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vehicle, VehicleMetaData>);
  static copyOf(source: Vehicle, mutator: (draft: MutableModel<Vehicle, VehicleMetaData>) => MutableModel<Vehicle, VehicleMetaData> | void): Vehicle;
}