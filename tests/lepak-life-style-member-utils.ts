import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { newLifestyleMember } from "../generated/LepakLifeStyleMember/LepakLifeStyleMember"

export function createnewLifestyleMemberEvent(
  member_id: BigInt,
  memberAddress: Address,
  level: BigInt
): newLifestyleMember {
  let newLifestyleMemberEvent = changetype<newLifestyleMember>(newMockEvent())

  newLifestyleMemberEvent.parameters = new Array()

  newLifestyleMemberEvent.parameters.push(
    new ethereum.EventParam(
      "member_id",
      ethereum.Value.fromUnsignedBigInt(member_id)
    )
  )
  newLifestyleMemberEvent.parameters.push(
    new ethereum.EventParam(
      "memberAddress",
      ethereum.Value.fromAddress(memberAddress)
    )
  )
  newLifestyleMemberEvent.parameters.push(
    new ethereum.EventParam("level", ethereum.Value.fromUnsignedBigInt(level))
  )

  return newLifestyleMemberEvent
}
