describe ("Home Snapshot", () => {
    it("should load the home site", () => {
        cy.visit("http://localhost:4200/home");
        cy.wait(6000);
    })

    it("should show h1",() => {
        cy.get("h1").contains("Home");
    })

    it("should take a snapshot",() => {
        cy.eyesOpen({
            appName: "Testino2",
            testName: "Visual Check",
            browser: [
                {name: "firefox", width: 1920, height: 1080},
                {name: "chrome", width: 1920, height: 1080},
                {name: "safari", width: 1920, height: 1080},
            ],
            
        });
        cy.eyesCheckWindow();
        cy.eyesClose();
    })
    
})