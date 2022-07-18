import dayjs from "dayjs"
import moment from "moment"
import AddNewComputer from "./add-new-computer-page"
import EditComputerPage from "./edit-computer-page"

export default class HomePage{

    // Locators
    btnAddNewButotn = '#add'
    txtFilterByName = '#searchbox'
    btnFilterByName = '#searchsubmit'

    // Actions
    clickOnAddNewButton(){
        cy.get(this.btnAddNewButotn).should("be.visible").click()
        return new AddNewComputer 
    }

    filterComputer(computerName){
        cy.get(this.txtFilterByName).type(computerName)
        cy.get(this.btnFilterByName).click()
        return this
    }

    selectComputerByName(computerName){
        cy.contains(computerName).should("be.visible").click()
        return new EditComputerPage
    }

    // Validator
    isAddNewMessageSuccessfullyDisplay(computerName){
        cy.contains(`Computer ${computerName} has been created`).should("be.visible");
        return this
    }

    isUpdateSuccessfullyMessageDisplay(computerName){
        cy.contains(`Computer ${computerName} has been updated`).should("be.visible")
        return this
    }
    
    isComputerDeletedSuccessfullyMessageDisplay(){
        cy.contains("Computer has been deleted").should("be.visible")
        return this
    }

    isComputerDeleted(){
        cy.contains("Nothing to display").should("be.visible")
        return this
    }

    isComputerDisplaySuccessfully(computerObj){
        var computerName = computerObj.computerName
        var introducedDate = computerObj.introducedDate
        var discontinuedDate = computerObj.discontinuedDate
        var company = computerObj.company

        if(computerName !== undefined){
            cy.contains(computerName).should("be.visible")
        }
        if(introducedDate !== undefined){
            var displayIntroducedDate = dayjs(introducedDate).format("DD MMM YYYY")
            cy.contains(displayIntroducedDate).should("be.visible")         
        }
        if(discontinuedDate !== undefined){
            var displaydiscontinuedDate= dayjs(discontinuedDate).format("DD MMM YYYY")
            cy.contains(displaydiscontinuedDate).should("be.visible")
        }
        if(company !== undefined){
            cy.contains(company).should("be.visible")
        }
        return this
    }
}