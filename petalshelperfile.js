<script src="js/scripts.js"></script>
<h1> Property List </h1>

<form action = '/addproperty' method ='post'>
<input type = 'submit' value = 'Add Property'>
</form>
<ul id='propertylist'>
<% @property.each do |item| %>
<li>
  Title: <%= item.title %>
  URL:   <%= item.url   %>
</li>
<% end %>
<footer>
   <% include ../partials/footer %>
</footer>
