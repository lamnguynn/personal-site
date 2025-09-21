.PHONY: list help setup-pre-commit

list help:
	@echo "Available Make targets:"
	@echo "<COMMON>"
	@echo "	list | help: 		Prints out the following make targets."
	@echo "<PRE-COMMIT>"
	@echo "	setup-pre-commit: 	Sets up pre-commit."

setup-pre-commit:
	@if ! command -v pre-commit >/dev/null 2>&1; then \
		echo "WARNING: 'pre-commit' is not installed. Please install via 'pip install pre-commit' or 'brew install pre-commit'."; \
	else \
		echo "Installing hooks..."; \
		pre-commit install; \
		echo "Successfully installed!"; \
	fi