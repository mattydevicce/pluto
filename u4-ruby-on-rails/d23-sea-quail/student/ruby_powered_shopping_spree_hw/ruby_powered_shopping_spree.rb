require 'pry'
require 'pg'
#======================
# Starter Data
#======================
stores = ["Street Vendor", "The White House Gift Shop", "Nordstrom Rack", "The Cake Ambiance"]

quantities = [5, 10, 15, 2, 7]

prices = [4.99, 9.99, 50.00, 75.00, 100.00]

items = [
  "Gummy Cola Bottle",
  "Guava Candy",
  "Taco",
  "Bibimbop",
  "Burrito",
  "Channa Masala",
  "Lettuce Wrap",
  "PIZZA",
  "Cheese",
  "(Disney Soundtrack)",
  "Whiskey",
  "Athletic Socks",
  "Teach Like a Champion",
  "Practice Perfect"
]

$pg_conn = PG.connect({:dbname => 'shopping_db', :host => 'localhost'})

insert_statement = $pg_conn.exec_params('INSERT INTO receipts (store,item,number_of_items,price,buy_date) VALUES ($1, $2, $3, $4, $5)', [stores[rand(stores.length)],items[rand(items.length)],quantities[rand(quantities.length)],prices[rand(stores.length)],Time.now])


def ur(field, ut, locater, locaterset)
  pans_jersey = $pg_conn.exec_params("UPDATE receipts SET #{field} = $1 WHERE #{locater} = $2", [ut, locaterset])
end
  
ur('item', 'Giants Jersey', 'item', '49ers Jersey')

ur('price', '350.00', 'item', 'PS4')

def discard_item
  length_of_receipts = $pg_conn.exec("SELECT * FROM receipts").count
  $pg_conn.exec_params("DELETE FROM receipts WHERE id = $1", [rand(length_of_receipts)])
end

8.times do
  discard_item  
end