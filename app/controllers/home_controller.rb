class HomeController < ApplicationController
  
  def index
    
  end
  
  
  def contact
    
    @error_msg = ""
    
    if params[:name] == nil || params[:name].empty?
      @error_msg += "Name cannot be empty<br/>"
    end
    
    if params[:email] == nil || params[:email].empty?
      @error_msg += "Email cannot be empty<br/>";
    end
    
    if (params[:subject].nil? || params[:subject].empty?) && (params[:message].nil? || params[:message].empty?)
      @error_msg += "There is no subject or message"
    end
    
    if !@error_msg.empty?
      render :text=>@error_msg and return
    else
      EMailer.thank_you_mail(params).deliver
      EMailer.contact_mail(params).deliver
      
      render :text=>"OK" and return
    end
    
  end
end
