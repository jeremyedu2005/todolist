import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "../Button";

describe("button", () => {
    it("affiche le contenu", () => {
        render(<Button>test</Button>);

        expect(screen.getByText("test")).toBeVisible();
    });

    it("appelle onClick lors du clic", async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Button onClick={onClick}>test</Button>);

        await user.click(screen.getByRole("button", { name: "test" }));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    // pour le type  faire deux tests
    //tester le composant par défaut
    //tester 
});