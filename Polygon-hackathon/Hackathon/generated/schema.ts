// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Player entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Player must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Player", id.toString(), this);
    }
  }

  static load(id: string): Player | null {
    return changetype<Player | null>(store.get("Player", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get uaername(): string {
    let value = this.get("uaername");
    return value!.toString();
  }

  set uaername(value: string) {
    this.set("uaername", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get No_Of_Games(): BigInt {
    let value = this.get("No_Of_Games");
    return value!.toBigInt();
  }

  set No_Of_Games(value: BigInt) {
    this.set("No_Of_Games", Value.fromBigInt(value));
  }

  get Date(): string {
    let value = this.get("Date");
    return value!.toString();
  }

  set Date(value: string) {
    this.set("Date", Value.fromString(value));
  }

  get Games(): Array<BigInt> | null {
    let value = this.get("Games");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set Games(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("Games");
    } else {
      this.set("Games", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get Highest(): BigInt | null {
    let value = this.get("Highest");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set Highest(value: BigInt | null) {
    if (!value) {
      this.unset("Highest");
    } else {
      this.set("Highest", Value.fromBigInt(<BigInt>value));
    }
  }

  get TokensOwned(): BigInt | null {
    let value = this.get("TokensOwned");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set TokensOwned(value: BigInt | null) {
    if (!value) {
      this.unset("TokensOwned");
    } else {
      this.set("TokensOwned", Value.fromBigInt(<BigInt>value));
    }
  }
}
