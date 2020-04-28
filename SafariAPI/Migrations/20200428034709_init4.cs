using Microsoft.EntityFrameworkCore.Migrations;

namespace SafariAPI.Migrations
{
    public partial class init4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Victreebell",
                table: "PokeLogsSql");

            migrationBuilder.AddColumn<bool>(
                name: "Victreebel",
                table: "PokeLogsSql",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Victreebel",
                table: "PokeLogsSql");

            migrationBuilder.AddColumn<bool>(
                name: "Victreebell",
                table: "PokeLogsSql",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
