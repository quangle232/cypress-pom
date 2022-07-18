import HomePage from "./home-page"

export default class AddNewComputer{

    // locator
    txtComupterName = '#name'
    txtIntroducedDate = '#introduced'
    txtDiscontinuedDate = '#discontinued'
    selCompany = '#company'
    btnSubmit = '[type=submit]'

    //Actions
    fillInformation(computerName, introducedDate, discontinueDate, company){
      cy.get(this.txtComupterName).should("be.visible").type(computerName)
      cy.get(this.txtIntroducedDate).should("be.visible").type(introducedDate)
      cy.get(this.txtDiscontinuedDate).should("be.visible").type(discontinueDate)
      cy.get(this.selCompany).should("be.visible").select(company)
      return this     
    }

    clickOnBtnSubmit(){
        cy.get(this.btnSubmit).should("be.visible").click()
        return this
    }

    addNewComputer(computerName, introducedDate, discontinueDate, company){
        this.fillInformation(computerName, introducedDate, discontinueDate, company).clickOnBtnSubmit()
        return new HomePage
    }

    // Validator
    
}