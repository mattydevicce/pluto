batman = {
  f_name: "Bruce",
  l_name: "Wayne",
  billionaire: true,
  alter_ego: "Batman"
}

batman_billionair = batman[:billionaire] ? "billionaire, industrialist, and philanthropist" : "hobo"
msg = "#{batman[:alter_ego]} is the secret identity of #{batman[:f_name]} #{batman[:l_name]}, an American #{batman_billionair}."
puts msg