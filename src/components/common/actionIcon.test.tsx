import { render, fireEvent } from "@testing-library/react";
import ActionIcon from "./actionIcon";

test("renders ActionIcon with correct text, icon, and href", () => {
  const testText = "Klicka här";
  const testHref = "/klicka-har";
  const testIcon = (
    <span role="img" aria-label="Klicka här ikon">
      🌟
    </span>
  );

  const { getByText, queryAllByRole } = render(
    <ActionIcon text={testText} icon={testIcon} href={testHref} />
  );

  // Kontrollera att texten och href finns i DOM:en
  const textElement = getByText(testText);
  const linkElement = getByText(testText).closest("a");

  expect(textElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", testHref);

  // Kontrollera antalet matchande ikon-element
  const iconElements = queryAllByRole("img", { name: /Klicka här ikon/i });
  expect(iconElements.length).toBe(2); // Du kan justera detta beroende på antalet ikoner som du förväntar dig

  // Kontrollera att båda ikonerna är synliga i DOM:en
  iconElements.forEach((iconElement) => {
    expect(iconElement).toBeInTheDocument();
  });
});

test("applies custom className to ActionIcon", () => {
  const testText = "Klicka här";
  const testHref = "/klicka-har";
  const testIcon = (
    <span role="img" aria-label="Klicka här ikon">
      🌟
    </span>
  );
  const testClassName = "custom-class";

  const { container } = render(
    <ActionIcon
      text={testText}
      icon={testIcon}
      href={testHref}
      className={testClassName}
    />
  );

  // Kontrollera att den anpassade klassen finns i DOM:en
  const linkElement = container.querySelector(`.${testClassName}`);
  expect(linkElement).toBeInTheDocument();
});
