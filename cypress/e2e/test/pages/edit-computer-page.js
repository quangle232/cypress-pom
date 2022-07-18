import AddNewComputer from "./add-new-computer-page";
import HomePage from "./home-page";

export default class EditComputerPage extends AddNewComputer{

    // Locators
    btnDeleteThisComputer = ".topRight [type=submit]"
    // Actions

    deleteComputer(){
        cy.get(this.btnDeleteThisComputer).should("be.visible").click()
        return new HomePage
    }

    updateInformation(computerObj){
        var computerName = computerObj.computerName
        var introducedDate = computerObj.introducedDate
        var discontinuedDate = computerObj.discontinuedDate
        var company = computerObj.company

        if(computerName !== undefined){
            cy.get(this.txtComupterName).clear()
                                        .should("be.visible")
                                        .type(computerName)
        }
        if(introducedDate !== undefined){
            cy.get(this.introducedDate).clear()
                                        .should("be.visible")
                                        .type(introducedDate)           
        }
        if(discontinuedDate !== undefined){
            cy.get(this.discontinuedDate).clear()
                                        .should("be.visible")
                                        .type(discontinuedDate)
        }
        if(company !== undefined){
            cy.get(this.selCompany).should("be.visible").select(company)
        }
        cy.contains("Save this computer").click()
        return new HomePage
    }
    // Validators
}