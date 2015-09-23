require 'json'
require 'rest-client'

module OpenWeatherMap

  URL = "http://api.openweathermap.org/data/2.5/weather"

  def self.fetch_temp_for(location)
    response = RestClient.get(URL, :params => {
      :q => location || "New York, NY",
      :units => "imperial"
    })
    data = JSON.parse(response.body)
    if data["cod"] != "404"
      data["main"]["temp"]
    else
      "N/A"
    end
  end

end
