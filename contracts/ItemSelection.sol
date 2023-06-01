// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ItemSelection is Ownable {
    using Counters for Counters.Counter;

    enum Item { EWaste, Plastic, Carton }
    enum DayOfWeek { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }

    struct Bag {
        uint256 numBags;
        string additionalInfo;
        string pickupAddress;
        DayOfWeek pickupDay;
    }

    mapping(Item => Bag) public itemBags;
    Counters.Counter private bagIdCounter;

    function selectItem(Item item, uint256 numBags, string calldata additionalInfo, string calldata pickupAddress) external {
        Bag memory bag = Bag(numBags, additionalInfo, pickupAddress, getDayOfWeek());
        itemBags[item] = bag;
    }

    function deselectItem(Item item) external onlyOwner {
        delete itemBags[item];
    }

    function getSelectedItems() external view returns (Item[] memory) {
        Item[] memory selectedItems = new Item[](3);
        uint256 index = 0;
        if (itemBags[Item.EWaste].numBags > 0) {
            selectedItems[index++] = Item.EWaste;
        }
        if (itemBags[Item.Plastic].numBags > 0) {
            selectedItems[index++] = Item.Plastic;
        }
        if (itemBags[Item.Carton].numBags > 0) {
            selectedItems[index++] = Item.Carton;
        }
        return selectedItems;
    }

    function getPickupDay(Item item) external view returns (DayOfWeek) {
        return itemBags[item].pickupDay;
    }

    function getDayOfWeek() internal view returns (DayOfWeek) {
        uint256 currentDay = ((block.timestamp / 86400) + 4) % 7;
        return DayOfWeek(currentDay);
    }
}
