public class UserChoice {
    
    //naming variables
    private String ballet;
    private String bachata;
    private String swing;
    private String salsa;

    public UserChoice() {
        ballet = "";
        bachata = "";
        swing = "";
        salsa = "";
    }

    public UserChoice(String ballet, String bachata, String swing, String salsa) {
        this.ballet = ballet;
        this.bachata = bachata;
        this.swing = swing;
        this.salsa = salsa;
    }
}

//Get method
public String getBallet() {
    return ballet;

public String getBachata() {    
    return bachata;         

public String getSwing() {  
    return swing;   

public String getSalsa() {  
    return salsa;
	
	}
	
	//Set method
    public void setBallet(String ballet) {
        this.ballet = ballet;
    }
    
    public void setBachata(String bachata) {
        this.bachata = bachata;
    }   

    public void setSwing(String swing) {
        this.swing = swing;
    }   

    public void setSalsa(String salsa) {
        this.salsa = salsa;
    }
}

